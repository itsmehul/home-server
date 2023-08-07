/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";
import styled from "styled-components";

interface Slide {
  id: number;
  imgUrl: string;
}

interface CarouselProps {
  slides: Slide[];
  width?: string;
  height?: string;
  onChange?: (id: number) => void;
}

const StyledCarousel = styled.div<CarouselProps>`
  display: flex;
  justify-content: center;
  width: ${(props) => props.width ?? "100%"};
  height: ${(props) => props.height ?? "fit-content"};
  position: relative;
  img {
    height: 130px;
    border-radius: 15px;
  }
`;

const StyledControl = styled.div<{ disabled?: boolean }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
  }
  svg {
    fill: #333;
  }
  opacity: ${(props) => (props.disabled ? 0.3 : 1)};
`;

const StyledLeftControl = styled(StyledControl)`
  cursor: pointer;
  left: 0px;
`;

const StyledRightControl = styled(StyledControl)`
  cursor: pointer;
  right: 0px;
`;

const ExerciseCarousel = ({
  slides,
  width,
  height,
  onChange,
}: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isAtStart = currentIndex === 0;
  const isAtEnd = currentIndex === slides.length - 1;

  const handlePrevClick = () => {
    if (isAtStart) return;
    setCurrentIndex(currentIndex - 1);
    onChange && onChange(currentIndex - 1);
  };

  const handleNextClick = () => {
    if (isAtEnd) return;
    setCurrentIndex(currentIndex + 1);
    onChange && onChange(currentIndex + 1);
  };

  return (
    <StyledCarousel width={width} height={height} slides={slides}>
      <img
        src={slides[currentIndex].imgUrl}
        alt={slides[currentIndex].imgUrl}
      />
      <StyledLeftControl onClick={handlePrevClick} disabled={isAtStart}>
        <RiArrowLeftLine size={30} />
      </StyledLeftControl>
      <StyledRightControl onClick={handleNextClick} disabled={isAtEnd}>
        <RiArrowRightLine size={30} />
      </StyledRightControl>
    </StyledCarousel>
  );
};

export default ExerciseCarousel;
