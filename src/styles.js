import { styled } from '@mui/system'
import Paper from '@mui/material/Paper'

export const GlassCard = styled(Paper)(({ theme }) => ({
  background: 'rgba(255,255,255,0.06)',
  backdropFilter: 'blur(8px)',
  border: '1px solid rgba(255,255,255,0.08)',
  boxShadow: '0 4px 12px rgba(2,6,23,0.5)',
  padding: theme.spacing(1.5),
  margin: theme.spacing(1),
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(1.2),
    margin: theme.spacing(0.8),
    boxShadow: '0 3px 10px rgba(2,6,23,0.45)'
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1),
    margin: theme.spacing(0.5),
    boxShadow: '0 2px 8px rgba(2,6,23,0.4)'
  }
}))

export const gradientButton = {
  background: 'linear-gradient(90deg, rgba(99,102,241,1) 0%, rgba(16,185,129,1) 100%)',
  color: '#fff',
  padding: '0.4rem 1rem',
  margin: '0.25rem',
  fontSize: '0.9rem',
  '@media (max-width: 768px)': {
    padding: '0.35rem 0.9rem',
    fontSize: '0.85rem'
  },
  '@media (max-width: 480px)': {
    padding: '0.3rem 0.8rem',
    fontSize: '0.8rem'
  }
}
