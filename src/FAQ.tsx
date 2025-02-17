import { Stack, Heading, AccordionRoot, AccordionItem, AccordionItemTrigger, Icon, AccordionItemContent } from "@chakra-ui/react";
import { LuTags, LuChartBarStacked } from "react-icons/lu";





export const FAQ = () => {
    return (
      <Stack width="full" maxW="400px">
        <Heading size="md">Product details</Heading>
        <AccordionRoot collapsible defaultValue={["info"]}>
          {items.map((item) => (
            <AccordionItem key={item.value} value={item.value}>
              <AccordionItemTrigger>
                <Icon fontSize="lg" color="fg.subtle">
                  {item.icon}
                </Icon>
                {item.title}
              </AccordionItemTrigger>
              <AccordionItemContent>{item.content}</AccordionItemContent>
            </AccordionItem>
          ))}
        </AccordionRoot>
      </Stack>
    )
  }
  
  const items = [
    {
      value: "info",
      icon: <LuTags />,
      title: "Product Info",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec odio vel dui euismod fermentum.",
    },
    {
      value: "stats",
      icon: <LuChartBarStacked />,
      title: "Stats",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec odio vel dui euismod fermentum.",
    },
  ]

  export default FAQ;