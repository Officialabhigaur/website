import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";


export function BentoGridContainer() {
  return (
    <div className="pb-10">
      <div className="py-10">
        <h2 className="max-w-4xl font-bold  pl-4 sm:pl-0 text-4xl text-blue-900 mx-auto">
          Why Choose Us?
        </h2>
        <p className="max-w-4xl mt-6 text-gray-600 text-lg  pl-4 sm:pl-0 mx-auto">
          At <span className="text-blue-900">AVR Services, </span>you're not
          just learning-you're gaining the skills, confidence, and mentorship to
          <span className="text-blue-900">
            reinvent your career in the digital age.
          </span>
        </p>
      </div>

      <BentoGrid className="max-w-4xl    mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            icon={item.icon}
            // className={i === 3 || i === 6 ? "md:col-span-2 " : " "}
            className={`${
              i === 3 || i === 6 ? "md:col-span-2 " : " "
            } bg-blue-100`}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

const items = [
  {
    title: "Certified Expert Trainers",
    description:
      "Learn from a Microsoft Certified Trainer along with professionals possessing industry experience, sharing real-work knowledge about analytics, coding, and AI technologies.",

    icon: (
      <IconClipboardCopy className="h-20 w-20 text-white bg-blue-900 rounded-2xl p-1" />
    ),
  },
  {
    title: "Hands-on projects",
    description:
      "From the first day, you are placed in the midst of projects that require application of the concept and employed in real-world contexts to prepare for business world issues.",

    icon: (
      <IconFileBroken className="h-20 w-20 text-white bg-blue-900 rounded-2xl p-1" />
    ),
  },
  {
    title: "Affordable & Flexible Learning",
    description:
      "Quality education should be accessible. Our online courses are budget-friendly and designed to fit your schedule, whether you're a student or working professional.",

    icon: (
      <IconSignature className="h-20 w-20 text-white bg-blue-900 rounded-2xl p-1" />
    ),
  },
  {
    title: "industry-Relevant IT Courses",
    description:
      "Data Analytics, Data Science, Web Development and such subjects of Generative AI are offered in keeping with the latest requirements of the industry. Unlike most other institute like Data Mites Training institute. AVR Services offers hands-on training and the classes are available in an offline and online mode.",

    icon: (
      <IconTableColumn className="h-20 w-20 text-white bg-blue-900 rounded-2xl p-1" />
    ),
  },
  {
    title: "Certificate in Live Projects and internship",
    description:
      "Right from the start, you work on live projects and gain hands-on experience. Typically, a training with an internship certificate is awarded upon successful completion,helping to earn you an edge in the market.",
    icon: (
      <IconArrowWaveRightUp className="h-20 w-20 text-white bg-blue-900 rounded-2xl p-1" />
    ),
  },
];
