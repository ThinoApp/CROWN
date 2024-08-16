import { Fragment } from "react";
import { motion } from "framer-motion";
import "./CustomText.scss";

export const text_content = {
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      ease: "easeIn",
      delay: i * 0.05,
      duration: 0.05,
    },
  }),

  hidden: {
    opacity: 0,
    y: 20,
  },
};

export const TypedParagraphText = ({ paragraph }: { paragraph: string }) => {
  return (
    <p>
      {paragraph.split("\n").map((line, lineIndex) => (
        <Fragment key={lineIndex}>
          {Array.from(line).map((item, index) => (
            <motion.span
              custom={index}
              variants={text_content}
              initial="hidden"
              animate="visible"
              key={index}
            >
              {item === " " ? "\u00A0" : item}
            </motion.span>
          ))}
          {lineIndex < paragraph.split("\n").length - 1 && <br />}
        </Fragment>
      ))}
    </p>
  );
};

export const TypedHead1Text = ({ paragraph }: { paragraph: string }) => {
  return (
    <h1>
      {paragraph.split("\n").map((line, lineIndex) => (
        <Fragment key={lineIndex}>
          {Array.from(line).map((item, index) => (
            <>
              <motion.span
                custom={index}
                variants={text_content}
                initial="hidden"
                // animate="visible"
                whileInView="visible"
                key={index}
              >
                {item === " " ? (
                  <>
                    <br />
                  </>
                ) : (
                  item
                )}
              </motion.span>
            </>
          ))}
          {lineIndex < paragraph.split("\n").length - 1 && <br />}
        </Fragment>
      ))}
    </h1>
  );
};
