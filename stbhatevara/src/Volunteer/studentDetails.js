import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, Typography, Container, Grid, Paper, Box } from '@mui/material';

const students = [
    { id: 1, name: 'John Doe', age: 20, course: 'Computer Science', major: 'Software Engineering' },
    { id: 2, name: 'Jane Smith', age: 22, course: 'Mechanical Engineering', major: 'Thermodynamics' },
    { id: 3, name: 'Alice Johnson', age: 19, course: 'Mathematics', major: 'Applied Mathematics' }
];

const StudentDetails = () => {
    const navigate = useNavigate();

    const handleCardClick = (id) => {
        navigate(`/volunteerSpecificStudent/${id}`);
    };

    return (
        <Container style={styles.container}>
            <Typography variant="h4" style={styles.header}>Student Details</Typography>
            <Paper elevation={3} style={styles.table}>
                <Box style={styles.tableHeader}>
                    <Grid container>
                        <Grid item xs={3} style={styles.tableHeaderCell}><Typography variant="h6">Name</Typography></Grid>
                        <Grid item xs={2} style={styles.tableHeaderCell}><Typography variant="h6">Age</Typography></Grid>
                        <Grid item xs={3} style={styles.tableHeaderCell}><Typography variant="h6">Course</Typography></Grid>
                        <Grid item xs={4} style={styles.tableHeaderCell}><Typography variant="h6">Major</Typography></Grid>
                    </Grid>
                </Box>
                {students.map(student => (
                    <Box key={student.id} style={styles.tableRow} onClick={() => handleCardClick(student.id)}>
                        <Grid container alignItems="center">
                            <Grid item xs={3} style={styles.tableCell}><Typography variant="body1">{student.name}</Typography></Grid>
                            <Grid item xs={2} style={styles.tableCell}><Typography variant="body1">{student.age}</Typography></Grid>
                            <Grid item xs={3} style={styles.tableCell}><Typography variant="body1">{student.course}</Typography></Grid>
                            <Grid item xs={4} style={styles.tableCell}><Typography variant="body1">{student.major}</Typography></Grid>
                        </Grid>
                    </Box>
                ))}
            </Paper>
        </Container>
    );
};

const styles = {
    container: {
        marginTop: '20px'
    },
    header: {
        marginBottom: '20px',
        textAlign: 'center'
    },
    table: {
        width: '100%',
        overflowX: 'auto'
    },
    tableHeader: {
        backgroundColor: '#f5f5f5',
        padding: '10px'
    },
    tableHeaderCell: {
        padding: '10px'
    },
    tableRow: {
        borderBottom: '1px solid #e0e0e0',
        cursor: 'pointer', // Make cursor pointer to indicate clickable
        '&:hover': {
            backgroundColor: '#f9f9f9'
        }
    },
    tableCell: {
        padding: '10px'
    }
};

export default StudentDetails;
