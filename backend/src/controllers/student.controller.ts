import { Response } from 'express';
import prisma from '../prisma/client';
import { AuthRequest } from '../middleware/auth.middleware';

export async function getAllStudents(req: AuthRequest, res: Response) {
  try {
    const students = await prisma.student.findMany({
      select: { id: true, name: true, email: true, feesPaid: true },
    });
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
}

export async function getProfile(req: AuthRequest, res: Response) {
  try {
    const student = await prisma.student.findUnique({
      where: { id: req.user.id },
      select: { id: true, name: true, email: true, feesPaid: true },
    });
    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.json(student);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
}

export async function updateProfile(req: AuthRequest, res: Response) {
  const { name, email } = req.body;
  try {
    const updated = await prisma.student.update({
      where: { id: req.user.id },
      data: { name, email },
      select: { id: true, name: true, email: true, feesPaid: true },
    });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
}

export async function payFees(req: AuthRequest, res: Response) {
  try {
    const updated = await prisma.student.update({
      where: { id: req.user.id },
      data: { feesPaid: true },
      select: { id: true, name: true, email: true, feesPaid: true },
    });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
} 