import React, { useState } from "react";
import { Steps } from "antd";
import styled from "styled-components";
import {
  CaretRightOutlined,
  SmileOutlined,
  HeartOutlined,
  UnlockOutlined,
  ReadOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons"; // Import the icons you want to use

export const StepsStyle = styled(Steps)`
  &.ant-steps {
    color: var(--blue);
    font-family: "Noto Serif", serif;
    max-width: 800px;
  }

  & .ant-steps-item-title {
    font-weight: 600;
    transition: color 0.3s ease;
  }

  & .ant-steps-item-description {
    font-family: "Rubik", sans-serif;
    transition: color 0.3s ease;
  }

  & .ant-steps-item:hover .ant-steps-item-title,
  & .ant-steps-item:hover .ant-steps-item-description {
    color: var(--blue);
  }

  &.ant-steps
    .ant-steps-item-finish
    > .ant-steps-item-container
    > .ant-steps-item-tail::after {
    background-color: var(--blue);
  }
`;

const MeditationSteps: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const onChange = (value: number) => {
    console.log("onChange:", value);
    setCurrent(value);
  };

  const centerContainer: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "85vh",
  };

  return (
    <>
      <div style={centerContainer}>
        <StepsStyle
          current={current}
          onChange={onChange}
          direction="vertical"
          items={[
            {
              title: "Start with Breath",
              description:
                "Focus on your breath. Inhale slowly through your nose, hold the breath for a moment, and then exhale slowly through your mouth. Feel the flow of air filling your lungs.",
              icon: <CaretRightOutlined style={{ color: "var(--blue)" }} />,
            },
            {
              title: "Body Awareness",
              description:
                "Shift your attention to your body. Start from the head and gradually move down to the tips of your toes. Feel every part of your body, being in the moment without trying to change anything.",
              icon: <SmileOutlined style={{ color: "var(--blue)" }} />,
            },
            {
              title: "Tension Release",
              description:
                "Notice any points of tension in the body. Imagine that tension relaxing and melting away, like water flowing down. Allow your body to become heavy and free.",
              icon: <HeartOutlined style={{ color: "var(--blue)" }} />,
            },
            {
              title: "Focus on the Moment",
              description:
                "Return to your breath. Concentrate on the moment between inhale and exhale. It's a place of calm where you can feel peace. Let your mind rest here.",
              icon: <UnlockOutlined style={{ color: "var(--blue)" }} />,
            },
            {
              title: "Gratitude",
              description:
                "Think about a few things you are grateful for in your life. They can be small things or significant moments. Feel the gratitude filling you.",
              icon: <ReadOutlined style={{ color: "var(--blue)" }} />,
            },
            {
              title: "Gradual Return",
              description:
                "Slowly become aware of your body and surroundings. When you are ready, slowly open your eyes. Feel the sense of tranquility staying with you and carry on with your day refreshed.",
              icon: <CheckCircleOutlined style={{ color: "var(--blue)" }} />,
            },
          ]}
        />
      </div>
    </>
  );
};

export default MeditationSteps;
