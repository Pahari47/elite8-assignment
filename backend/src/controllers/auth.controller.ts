import { Request, Response } from 'express';
import prisma from '../prisma/client';
import bcrypt from 'bcryptjs';
import { signToken } from '../utils/jwt';

export async function signup(req: Request, res: Response) {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }
  try {
    const existing = await prisma.student.findUnique({ where: { email } });
    if (existing) {
      return res.status(409).json({ message: 'Email already registered' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const student = await prisma.student.create({
      data: { name, email, password: hashedPassword },
    });
    const token = signToken({ id: student.id, email: student.email });
    res.status(201).json({ token, student: { id: student.id, name: student.name, email: student.email, feesPaid: student.feesPaid } });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
}

export async function login(req: Request, res: Response) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password required' });
  }
  try {
    const student = await prisma.student.findUnique({ where: { email } });
    if (!student) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const valid = await bcrypt.compare(password, student.password);
    if (!valid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = signToken({ id: student.id, email: student.email });
    res.json({ token, student: { id: student.id, name: student.name, email: student.email, feesPaid: student.feesPaid } });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
} 