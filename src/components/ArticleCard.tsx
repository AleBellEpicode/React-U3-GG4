import { Card } from "react-bootstrap";
import { Iarticles } from "../Interfaces/Iarticles";
import { Link } from "react-router-dom";

interface ArticleCard {
  article: Iarticles;
}

const ArticleBody = ({ article }: ArticleCard) => {
  return (
    <Card className="mb-4">
      <Card.Img variant="top" src={article.imageUrl} />
      <Card.Body>
        <Card.Title>{article.title}</Card.Title>
        <Link to={`/${article.id}`}> Go to the Article</Link>
      </Card.Body>
    </Card>
  );
};
export default ArticleBody;
