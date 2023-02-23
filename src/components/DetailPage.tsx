import { Card, Container, Row, Col } from "react-bootstrap";
import { Iarticles } from "../Interfaces/Iarticles";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const URL = "https://api.spaceflightnewsapi.net/v3/articles/";

  const [singleArticle, setSingleArticle] = useState<Iarticles>();
  const params = useParams();

  useEffect(() => {
    fetchArticle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchArticle = async () => {
    try {
      const response = await fetch(URL + params.articleDetail);
      if (response.ok) {
        const articleFromApi = await response.json();
        setSingleArticle(articleFromApi);
        console.log("articolo singolo" + articleFromApi);
      } else {
        console.log("errore");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={5}>
          <Card className="mb-4">
            <Card.Img variant="top" src={singleArticle?.imageUrl} />
            <Card.Body>
              <Card.Title>{singleArticle?.title}</Card.Title>
              <Card.Text>{singleArticle?.summary}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default DetailPage;
