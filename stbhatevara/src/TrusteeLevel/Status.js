// src/components/Status.js
import React, { useState, useEffect } from 'react';
import { Container, Typography, Button, TextField, Grid, Paper } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom'; // Import useParams and useNavigate

const students = [
    { id: 1, name: 'John Doe', age: 20, major: 'Computer Science', status: 'Pending Approval' },
    { id: 2, name: 'Jane Smith', age: 22, major: 'Law', status: 'Pending Approval' },
    { id: 3, name: 'Mike Johnson', age: 21, major: 'Psychology', status: 'Pending Approval' },
];

const Status = () => {
    const navigate = useNavigate();
    const params = useParams(); // useParams hook to get route parameters
    const [student, setStudent] = useState(null); // State to hold the student object
    const [review, setReview] = useState('');
    const [amount, setAmount] = useState('');

    useEffect(() => {
        // Find the student based on the ID from route params
        const studentId = parseInt(params.id); // Convert id to integer
        const foundStudent = students.find(student => student.id === studentId);
        if (foundStudent) {
            setStudent(foundStudent);
        } else {
            // Handle case where student is not found (optional)
            navigate('/'); // Redirect to homepage or appropriate route
        }
    }, [params.id, navigate]);

    const handleAccept = () => {
        // Handle accept action
        console.log(`Accepted ${student.name} with amount: ${amount}`);
    };

    const handleDecline = () => {
        // Handle decline action
        console.log(`Declined ${student.name}`);
    };

    const handleReviewChange = (event) => {
        setReview(event.target.value);
    };

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    };

    const handleSubmit = () => {
        // Handle submit action (e.g., send comment and amount to server)
        console.log(`Review submitted: ${review}`);
        console.log(`Amount submitted: ${amount}`);
        // Optionally, clear the comment box and amount field after submission
        setReview('');
        setAmount('');
    };

    if (!student) {
        return (
            <Container>
                <Typography variant="h4">Student not found</Typography>
            </Container>
        );
    }

    return (
        <Container maxWidth="md" style={styles.container}>
            <Typography variant="h4" style={styles.header}>
                Status Page for {student.name}
            </Typography>
            <Paper elevation={3} style={styles.paper}>
                <Grid container spacing={3} justifyContent="center">
                    <Grid item xs={12}>
                        <Typography variant="body1">
                            ID: {student.id}<br />
                            Name: {student.name}<br />
                            Age: {student.age}<br />
                            Major: {student.major}<br />
                            Status: {student.status}<br />
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Button
                            fullWidth
                            variant="contained"
                            style={{ backgroundColor: '#4CAF50', color: 'white' }}
                            onClick={handleAccept}
                        >
                            Accept
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Button
                            fullWidth
                            variant="contained"
                            style={{ backgroundColor: '#f44336', color: 'white' }}
                            onClick={handleDecline}
                        >
                            Decline
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Review"
                            multiline
                            rows={4}
                            fullWidth
                            value={review}
                            onChange={handleReviewChange}
                            variant="outlined"
                            style={{ marginBottom: '10px' }}
                        />
                        <TextField
                            label="Amount"
                            fullWidth
                            type="number"
                            value={amount}
                            onChange={handleAmountChange}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={handleSubmit}
                        >
                            Submit Review
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
};

const styles = {
    container: {
        marginTop: '20px',
        marginBottom: '20px',
        textAlign: 'center',
    },
    header: {
        marginBottom: '20px',
    },
    paper: {
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
};

export default Status;
