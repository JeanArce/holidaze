import { Container, Row, Col } from "react-bootstrap";
import styles from './home.styles.module.scss';

const Home = () => {
    return (
        <div className={styles.home}>
            <Container>
                <Row>
                    <Col>
                        <h1>Home</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};


export default Home;