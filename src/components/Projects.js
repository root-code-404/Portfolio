import React from 'react';
import { Typography, Grid, Card, CardContent, Chip, Button, useTheme, useMediaQuery, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const StyledCard = styled(Card)({
  backgroundColor: '#1B1B1D',
  color: '#ffffff',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
});

const useStyles = {
  cardContent: {
    color: '#ffffff',
    flexGrow: 1,
    paddingBottom: '16px !important',
  },
  chip: {
    marginRight: '8px',
    marginBottom: '8px',
    color: '#CE9552',
    borderColor: '#CE9552',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
    objectFit: 'cover',
  },
};

const projects = [
  {
    title: 'Shopping Website',
    description: `The Shopping website is a web-based application developed using React, a high-level JavaScript framework, and MongoDB for efficient data management. This project aims to provide an online learning platform for students.`,
    technologies: ['React.Js', 'Node.Js', 'MongoDB','Vitelatest'],
    imageUrl: '/project6.png',
    githubLink: 'https://github.com/root-code-404/work.git',
  },
  {
    title: 'Online Learning Platform',
    description: `The Online Learning Platform is a web-based application developed using React, a high-level JavaScript framework, and MongoDB for efficient data management. This project aims to provide an online learning platform for students.`,
    technologies: ['React.Js', 'Node.Js', 'MongoDB'],
    imageUrl: '/project1.png',
    githubLink: 'https://github.com/root-code-404/Onlinelearning.git',
  },
  {
    title: 'Social Media Website ',
    description: 'The Social Media Platform is a dynamic web-based application built using React, a powerful JavaScript framework, and MongoDB for scalable data management. This project aims to create a space where users can connect, share, and engage in meaningful conversations while enjoying a seamless, user-friendly experience ',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Express.js', 'MongoDB'],
    imageUrl: '/project2.png',
    githubLink: 'https://github.com/root-code-404/SocialMedia.git',
  },
  {
    title: 'Personal Website',
    description: 'The Personal Website project aims to develop a visually appealing and interactive online platform using HTML for structuring content, CSS for styling, Bootstrap for responsive design, and JavaScript for dynamic functionality, providing users with an engaging and user-friendly experience while offering administrators a powerful tool to manage personal data and information.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap'],
    imageUrl: '/project4.png',
    githubLink: 'https://github.com/root-code-404/portfolio.git',
  },
    {
    title: 'Employee Registration',
    description: 'The Employee Registration Website is a robust web application developed using React and MongoDB, designed to manage employee data efficiently. It offers full CRUD (Create, Read, Update, Delete) functionality, allowing administrators to seamlessly register new employees, view employee details, update information, and remove records. This platform ensures streamlined employee management with an intuitive user interface and secure data handling.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap'],
    imageUrl: '/project3.png',
    githubLink: 'https://github.com/root-code-404/Employee.git',
  },
    {
    title: 'HoobBank',
    description: `Cloned a website using React and Vite to achieve fast load times and efficient component-driven development`,
    technologies: ['React.Js', 'Vite',],
    imageUrl: '/project5.png',
    githubLink: 'https://github.com/root-code-404/Website.git',
  },
];

const Projects = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <section id="projects" style={{ background: '#242526', padding: '4rem 0' }}>
      <Typography variant="h4" gutterBottom style={{ color: '#CE9552', textAlign: 'center', fontWeight: 700 }}>
        Projects
      </Typography>
      <Container maxWidth="lg">
        <Grid container justifyContent="center" spacing={isMobile ? 2 : 4} style={{ marginTop: '2rem' }}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={6} lg={6} key={index}>
              <ProjectCard project={project} index={index} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

const ProjectCard = ({ project, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger the animation every time the element is in view
    threshold: 0.1,    // Trigger when 10% of the component is in view
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }} // Ensure consistent width and height
    >
      <StyledCard style={{ width: '100%', height: '100%' }}>
        <CardContent style={useStyles.cardContent}>
          <img src={project.imageUrl} alt={project.title} style={useStyles.image} />
          <Typography variant="h6" component="h2" gutterBottom>
            {project.title}
          </Typography>
          <Typography variant="body1" color="inherit" gutterBottom>
            {project.description}
          </Typography>
          <div style={{ marginTop: '1rem' }}>
            {project.technologies.map((tech, index) => (
              <Chip key={index} label={tech} variant="outlined" style={useStyles.chip} />
            ))}
          </div>
        </CardContent>
        <div style={{ padding: '1rem', borderTop: '1px solid #3C3C3C', display: 'flex', justifyContent: 'center' }}>
          <Button variant="outlined" color="primary" href={project.githubLink} target="_blank" rel="noopener noreferrer">
            GitHub
          </Button>
        </div>
      </StyledCard>
    </motion.div>
  );
};

export default Projects;
