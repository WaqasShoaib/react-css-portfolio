

import React, { useEffect } from 'react';
import { usePageTitle } from '../../context/PageTitleContext';
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box
} from '@mui/material';

const data = [
  { Degree: 'B.Sc Computer Science', Institution: 'University X', Year: '2020' },
  { Degree: 'M.Sc Web Development', Institution: 'University Y', Year: '2022' },
];

const Education = () => {
  const { setTitle } = usePageTitle();

  useEffect(() => {
    setTitle('Education | MyPortfolio');
  }, [setTitle]);

  return (
    <Box
      sx={{
        background: 'linear-gradient(to right, #f0f2f5, #ffffff)',
        minHeight: '100vh',
        py: 4,
      }}
    >
      <Container maxWidth="md">
        <Paper
          elevation={4}
          sx={{
            borderRadius: 3,
            p: { xs: 2, sm: 3, md: 4 },
            backgroundColor: '#ffffff',
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{ fontWeight: 'bold', textAlign: 'center', mb: 4 }}
          >
            Education
          </Typography>

          <TableContainer>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: '#1976d2' }}>
                  <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Degree</TableCell>
                  <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Institution</TableCell>
                  <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Year</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{
                      backgroundColor: index % 2 === 0 ? '#f5f5f5' : '#ffffff',
                      '&:hover': {
                        backgroundColor: '#e3f2fd',
                      },
                    }}
                  >
                    <TableCell>{row.Degree}</TableCell>
                    <TableCell>{row.Institution}</TableCell>
                    <TableCell>{row.Year}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Container>
    </Box>
  );
};

export default Education;
