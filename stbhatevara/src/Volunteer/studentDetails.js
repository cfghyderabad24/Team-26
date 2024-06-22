// src/StudentDetails.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, Typography, Container, Grid } from '@mui/material';

const students = [
    { id: 1, name: 'John Doe', age: 20, course: 'Computer Science' },
    { id: 2, name: 'Jane Smith', age: 22, course: 'Mechanical Engineering' },
    { id: 3, name: 'Alice Johnson', age: 19, course: 'Mathematics' }
];

const StudentDetails = () => {
    const navigate = useNavigate();

    const handleCardClick = (id) => {
        navigate(`/specificStudent/${id}`);
    };

    return (
        <Container style={styles.container}>
            <Typography variant="h4" style={styles.header}>Student Details</Typography>
            <Grid container spacing={3} direction="column">
                {students.map(student => (
                    <Grid item key={student.id}>
                        <Card style={styles.card} onClick={() => handleCardClick(student.id)}>
                            <CardContent style={styles.cardContent}>
                                <Typography variant="h6" style={styles.name}>{student.name}</Typography>
                                <Typography variant="body2" color="textSecondary" style={styles.detail}>
                                    Age: {student.age}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" style={styles.detail}>
                                    Course: {student.course}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
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
    card: {
        minHeight: 100,
        display: 'flex',
        alignItems: 'center',
        padding: '10px',
        cursor: 'pointer' // Make cursor pointer to indicate clickable
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%'
    },
    name: {
        flexGrow: 1
    },
    detail: {
        marginLeft: '20px'
    }
};

export default StudentDetails;
