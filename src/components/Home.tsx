import { useEffect, useState } from "react";
import { Iarticles } from "../Interfaces/Iarticles";
import ArticleBody from "./ArticleCard";
import { Row, Col, Container } from "react-bootstrap";
const Home = () => {
  const URL = "https://api.spaceflightnewsapi.net/v3/articles";

  const [articles, setArticles] = useState<Iarticles[]>([]);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await fetch(URL);
      if (response.ok) {
        const articlesFromApi = await response.json();
        setArticles(articlesFromApi);
        console.log(articlesFromApi);
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
          {articles.map((article, i) => {
            return <ArticleBody key={i} article={article} />;
          })}
        </Col>
      </Row>
    </Container>
  );
};
export default Home;
