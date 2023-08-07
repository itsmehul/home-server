import styled from "styled-components";

const StyledTooltip = styled.div`
  position: relative;
  display: inline-block;

  .tooltip-content {
    visibility: hidden;
    opacity: 0;
    position: absolute;
    z-index: 1;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    color: white;
    border-radius: 4px;
    white-space: nowrap;
    transition: all 0.2s ease-in-out;
    font-size: 0.8rem;
    line-height: 1.2;
    width: max-content;
  }

  &:hover .tooltip-content {
    visibility: visible;
    opacity: 1;
    bottom: calc(100% + 0.5rem);
  }
`;

interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactNode;
}

const Tooltip = ({ content, children }: TooltipProps) => (
  <StyledTooltip>
    {children}
    <div className="tooltip-content">{content}</div>
  </StyledTooltip>
);

export default Tooltip;
