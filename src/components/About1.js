import React from "react";
import {
  Container,
  Grid,
  Typography,
 
} from "@mui/material";

const About = () => {

  return (
    <section
      id="about"
      style={{ background: "#242526", color: "#ffffff", padding: "3rem 3rem" }}
    >
      <Grid container justifyContent="center" alignItems="center" spacing={4}>
        {/* Image Column */}
        <Grid
          item
          xs={12}
          md={6}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <img
            src="./about2.jpg"
            alt="About me"
            className="img-fluid"
            style={{
              borderRadius: "5rem",
              maxWidth: "100%",
              height: "auto",
              objectFit: "cover",
              
              transition: "filter 0.5s ease-in-out",
            }}
            onMouseEnter={(e) => e.currentTarget.style.filter = "grayscale(0%)"}
            onMouseLeave={(e) => e.currentTarget.style.filter = "grayscale(5%)"}
          />
        </Grid>

        {/* Content Column */}
        <Grid
          item
          xs={12}
          md={6}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            style={{ color: "#CE9552", textAlign: "center" }}
          >
            About Me
          </Typography>
          <Container>
            <Typography
              variant="body1"
              style={{ marginBottom: "1rem", textAlign: "justify" }}
            >
              I am a skilled full-stack developer with expertise in React, Node.js, Express.js, and JavaScript. I specialize in building modern web applications that are both scalable and user-friendly, with a passion for delivering clean, efficient code. From dynamic front-end interfaces to robust back-end solutions, I enjoy turning complex problems into innovative digital experiences. Whether working on social media platforms, online learning systems, or employee management tools, I focus on creating seamless and responsive designs tailored to users’ needs.
            </Typography>
           
          </Container>
        </Grid>
      </Grid>
    </section>
  );
};

export default About;
