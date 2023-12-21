"use client";

import { insights } from "@/constants";
import { InsightCard, MyStaggerContainer, TitleText, TypingText } from "..";

const Insights = () => {
  return (
    <MyStaggerContainer>
      <TypingText title="| Insight" textStyles="text-center" />
      <TitleText
        title={<>Insight about metaverse</>}
        textStyles="text-center"
      />
      <div className="mt-[50px] flex flex-col gap-[30px]">
        {insights.map((insight, index) => (
          <InsightCard key={index} {...insight} index={index + 1} />
        ))}
      </div>
    </MyStaggerContainer>
  );
};

export default Insights;
