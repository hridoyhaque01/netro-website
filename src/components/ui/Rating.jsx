import { fillStarSvg, halfFillStarSvg, strokeStarSvg } from "@/lib/images";

const Rating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    let stars = [];

    for (let i = 0; i < fullStars; i++) {
        stars.push(<span key={`fill-${i}`}>{fillStarSvg}</span>);
    }
    if (halfStar) {
        stars.push(<span key="half">{halfFillStarSvg}</span>);
    }
    for (let i = 0; i < emptyStars; i++) {
        stars.push(<span key={`stroke-${i}`}>{strokeStarSvg}</span>);
    }

    return <div className="flex items-center gap-3">{stars}</div>;
};

export default Rating;
