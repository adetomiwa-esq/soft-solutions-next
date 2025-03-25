import beach from '@/assets/beach.png'
import bike from '@/assets/bike.png'
import cook from '@/assets/cook.png'
import dance from '@/assets/dance.png'
import museum from '@/assets/museum.png'
import travel from '@/assets/travel.png'
import draw from '@/assets/draw.png'
import history from '@/assets/history.png'
import wood from '@/assets/wood.png'
import photo from '@/assets/photo.png'
import poem from '@/assets/poem.png'
import knit from '@/assets/knit.png'
import gender from '@/assets/gender.png'
import age from '@/assets/age.png'
import occupation from '@/assets/occupation.png'
import relationship from '@/assets/relationship.png'
import location from '@/assets/location.png'
import height from '@/assets/height.png'
import weight from '@/assets/weight.png'
import religion from '@/assets/religion.png'
import nationality from '@/assets/nationality.png'
import IconsMap from './IconsMap'
import Image from 'next/image'

export default function PersonalInfo() {
    const firstSection = [
        {img: beach, title: "Layin on the Beach"},
        {img: bike, title: "Biking"},
        {img: cook, title: "Cooking"},
        {img: dance, title: "Dancing"},
        {img: museum, title: "Museum & arts"}
    ]

    const secondSection = [
        {img: travel, title: "Travel"},
        {img: draw, title: "Drawing"},
        {img: history, title: "History"},
        {img: wood, title: "Woodworking"},
        {img: photo, title: "Photography"},
        {img: poem, title: "Poetry"},
        {img: knit, title: "Knitting"}
    ]

    const thirdSection = [
        {img: gender, property: "Gender", value: "Male"},
        {img: age, property: "Age", value: "27"},
        {img: occupation, property: "Occupation", value: "Engineer"},
        {img: relationship, property: "Relationship", value: "Single"},
        {img: location, property: "Location", value: "Lagos"},
        {img: height, property: "Height range", value: "5'5 - 6'0"},
        {img: weight, property: "Weight range", value: "60 - 70kg"},
        {img: religion, property: "Religion", value: "Christianity"},
        {img: nationality, property: "Nationality", value: "Nigerian"},
    ]
  return (
    <section className="flex gap- flex-wrap gap-4 pt-7">
        <IconsMap data={firstSection} header="My hobbies" />
        <IconsMap data={secondSection} header="My interests" />

        <div className="w-[323px] bg-white rounded-md py-4 px-3">
            <h3 className="text mb-3 font-semibold">About Me</h3>

            {
                thirdSection.map((x, i) => (
                    <div className="flex items-center my-2" key={i}>
                        <Image src={x.img} alt='' className='w-5 h-5 mr-3' />
                        <p className="w-[40%] text-[10px]">{x.property}:</p>
                        <h3 className="text-xs font-medium">{x.value}</h3>
                    </div>
                ))
            }
        </div>
    </section>
  )
}
