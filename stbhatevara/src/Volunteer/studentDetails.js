import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, Typography, Container, Grid } from '@mui/material';
import axios from 'axios';

const StudentDetails = () => {
    const [students, setStudents] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3500/scholar/student')
            .then(response => {
                setStudents(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error fetching student data:', error);
            });
    }, []);

    const handleCardClick = (id) => {
        navigate(`/volunteerSpecificStudent/${id}`);
    };

    return (
        <Container style={styles.container}>
            <Typography variant="h4" style={styles.header}>Student Details</Typography>
            <Grid container spacing={3} direction="column">
                {students.map(student => (
                    <Grid item key={student._id}>
                        <Card style={styles.card} onClick={() => handleCardClick(student._id)}>
                            <CardContent style={styles.cardContent}>
                                <Typography variant="h6" style={styles.name}>{student.Name}</Typography>
                                <Typography variant="body2" color="textSecondary" style={styles.detail}>
                                    Course: {student.courseName}
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
