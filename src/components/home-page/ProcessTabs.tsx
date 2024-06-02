/* eslint-disable @next/next/no-img-element */
"use client";

import { ReactNode, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../common/tabs";
import clsx from "clsx";
import { ListTab } from "@/types";

type Props = {
  listTab: ListTab[];
  listContent: {
    value: string;
    title: string;
    description: ReactNode | string;
    imageFeature: string;
  }[];
  defaultValue?: string;
  filterTable?: ReactNode;
};

export default function ProcessTabs({
  listTab,
  listContent,
  filterTable,
  defaultValue,
}: Props) {
  const [tabs, setTabs] = useState<string>(defaultValue || "contact");

  return (
    <Tabs defaultValue={tabs} onValueChange={(value) => setTabs(value)} className="w-full">
      <div className="flex flex-col lg:flex-row items-start justify-between lg:border-b lg:border-divider-secondary bg-transparent">
        <TabsList className="grid grid-cols-2 gap-x-16 md:grid-cols-4 md:gap-x-52">
          {listTab.map((tab) => (
            <TabsTrigger
              className={clsx(
                "text-base md:text-lg font-bold lg:pt-1.5 pb-3 uppercase lg:pb-4 flex items-center gap-x-2 border-b-[2px] border-solid pt-0",
                {
                  "text-primary border-primary": tabs === tab.value,
                  "border-transparent": tabs !== tab.value,
                }
              )}
              value={tab.value}
              key={tab.value}
            >
              {tab.prefix}
              {tab.title}
              {tab.suffix}
            </TabsTrigger>
          ))}
        </TabsList>
        {filterTable && (
          <div className="pt-2 lg:py-0 lg:w-max w-full">{filterTable}</div>
        )}
      </div>
      {listContent.map((content) => (
        <TabsContent key={content.value} value={content.value}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-2 py-5 md:py-10">
            <div>
              <h1 className="text-base md:text-2xl font-bold">{content.title}</h1>
              <div className="mt-4 md:mt-8 text-sm md:text-base font-medium text-secondary">{content.description}</div>
            </div>
            <div>
              <img src={content.imageFeature} alt="Image content process" />
            </div>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
