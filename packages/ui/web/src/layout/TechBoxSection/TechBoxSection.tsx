import { Text } from "common"
import { ITechBox, TechBox } from "features"

export interface ITechBoxSection {
  techBoxs: Array<ITechBox>
}

export const TechBoxSection = (props: ITechBoxSection) => {
  const { techBoxs } = props
  
  return (
      <section className="w-full flex justify-items-center flex-col items-center">
        <Text type="h2" bottomMargin="large">
          Turbo tech stack
        </Text>
        <div className="w-full grid grid-cols-1 gap-8 sm:gap-y-12 xl:gap-0 sm:grid-cols-2 lg:grid-cols-5 overflow-scroll p-8 justify-items-center">
          {techBoxs.map((techBox) => (
            <TechBox
              key={techBox.imgSrc}
              navigateTo={techBox.navigateTo}
              imgSrc={techBox.imgSrc}
              isTargetBlank={techBox.isTargetBlank}
              alt="alt text test"
            />
          ))}
        </div>
      </section>
  )
}