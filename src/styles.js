import { styled } from '@mui/system'
import Paper from '@mui/material/Paper'


export const GlassCard = styled(Paper)(({ theme }) => ({
background: 'rgba(255,255,255,0.06)',
backdropFilter: 'blur(8px)',
border: '1px solid rgba(255,255,255,0.08)',
boxShadow: '0 6px 20px rgba(2,6,23,0.6)'
}))


export const gradientButton = {
background: 'linear-gradient(90deg, rgba(99,102,241,1) 0%, rgba(16,185,129,1) 100%)',
color: '#fff'
}