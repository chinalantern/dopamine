import { createRef } from "react"
import { Vector3 } from "three"

const state = {
  sections: 26,
  pages: 25,
  zoom: 75,
  paragraphs: [
    {
      offset: 1,
      factor: 1.75,
      header: "Reality",
      hideImage: false,
      image: "/photo-1515036551567-bf1198cccc35.jpeg",
      aspect: 1.51,
      subParagraphs: ["I spend my days at home with the air thick with regret."]
    },
    {
      offset: 2,
      factor: 2.0,
      header: " ",
      hideImage: false,
      image: "/photo-1519608487953-e999c86e7455.jpeg",
      aspect: 1.5,
      subParagraphs: [
        "I have a boyfriend, who comes over about once a week. My drug use greatly upsets him. This, despite him spending his days screaming at horses, gesticulating with his racing form, and kicking trash cans on the streets of snowy Chicago."
      ]
    },
    {
      offset: 3,
      factor: 2.25,
      header: "9am",
      hideImage: false,
      image: "/ph1.jpg",
      aspect: 1.5037,
      subParagraphs: [
        "9.00 is when I can do my drugs. The culmination of my entire day. The room is littered with incriminating evidence. From the crack pipe in my purse to the thick, purple tracks running up and down my arms. The floor is a crime scene. Sliced-up straws in neon colors, orange and green and pink. Razor blades and credit cards. And mountains – mountains – of trash.",
        "Not just trash, but all manner of little things.Cigarettes, bandages, club soda, nail polish remover, methadone bottles.And, most recently, two different types of cereal - sugary, brightly colored, fruity flavored.Appropriate for a child, one with a mother who’s always in a hurry and must sacrifice her offspring’s dental health to get out the door on time.Not appropriate for a 41 year old woman. A 41 year old woman with a sweet tooth and a drug problem.",
        "The cereal bowls represent two levels of competence, battling each other to maintain a state of dominance.One of them – the Fruit Loops - isn’t that bad.Simply a bowl with a pond of almond milk, a plastic spoon, and a few succinct loops left in the center; two orange and green pieces at the rim, almost begging to get out.The second bowl is the real tragedy.This time the bowl(Fruity Pebbles) is completely upside down and the cereal, like multicolored vomit, sits in mounds and valleys, totally escaping from the confines of the bowl, then giving up exactly when freedom was almost in it’s grasp."
      ]
    },
    {
      offset: 4,
      factor: 2.0,
      header: " ",
      hideImage: false,
      image: "/ph3.jpg",
      aspect: 0.665,
      subParagraphs: [
        "He as when he makes his way past the front door. These constitute an unwanted assault of the outside world. A neighbor, a maintenance worker, the landlord. They have no idea how words like “Hi!”, “Nice out today!”, and “Thank God it’s Friday!“ feel like a machete of ice dismembering his spine. But those potential experiences are at least thirty minutes away, so he can cover his head with a burgundy blanket and enjoy -well, not enjoy – just tolerate his bed, at least for now."
      ]
    },
    {
      offset: 5,
      factor: 1.75,
      header: " ",
      hideImage: false,
      image: "/photo-1533577116850-9cc66cad8a9b.jpeg",
      aspect: 1.55,
      subParagraphs: [
        "I’m going to do something unexpected. Something outside my usual laziness. I can’t stand the Fruity Pebbles, the multicolored mass on the floor, and it’s disgusting almond milk, almost vaginal in its secretions. This is very out of character for me. I rarely clean food off the floor. There have been countless dropped containers of $10 ice cream, the defrosting mass sinking between my fingers as I try to salvage the now filthy blob. But the fruity pebbles need attention. I’d probably leave them to rot, if I didn’t keep stepping on them, soaking my socks. I walk to the kitchen to get the paper towels, noticing a scattering of related fruit-flavored cereal (and bits of actual fruit) littering the floor of basically my entire apartment. I’ll clean them up. Not today. Six months. Six months or three years, something like that."
      ]
    },
    {
      offset: 7,
      factor: 1.05,
      header: " ",
      hideImage: false,
      image: "/photo-1548191265-cc70d3d45ba1.jpeg",
      aspect: 1.77,
      subParagraphs: [
        "He’s an attractive man. Or at least people tell him. He used to be a model – a literal model. He’d pose for catalogues. The token black guy in the Old Navy holiday insert from the thick set of glossy pages accompanying the Sunday paper. He would pose in pajamas printed with reindeer and hold an empty mug assumed to be hot chocolate. Now all his clothes gather dust in a corner of his room. And look at him, now. Each day, He battles the morning light. Each day, he struggles to shower, shave, feed the cat, choke down a smoothie, and pretend life has a fucking purpose."
      ]
    },
    {
      offset: 8,
      factor: 1.75,
      header: " ",
      hideImage: false,
      image: "/photo-1515036551567-bf1198cccc35.jpeg",
      aspect: 1.51,
      subParagraphs: [
        "I used to have a friend, and I think of him while unearthing the paper towels from the back of the cabinet. A friend named Lonnie, who’s real name is Lonnell but he prefers non-gendered names, who moved home to Detroit then disappeared. Stopped taking my calls. Stopped replying to my paragraphss. I think he went to Mexico, and I envision him and the smell of coconuts on his skin. I imagine him on one of those beaches they highlight in commercials beckoning tourists to spend their vacation days. Cancun. Greece. Turks and Caicos."
      ]
    },
    {
      offset: 9,
      factor: 1.75,
      header: " ",
      hideImage: false,
      image: "/photo-1515036551567-bf1198cccc35.jpeg",
      aspect: 1.51,
      subParagraphs: [
        "Under the blanket, he’s naked. But when he closes his eyes, body doesn’t exist. It’s no longer a solidified object. It’s a ghostly, filmy form, semi-opaque with no skin, no organs, no skeleton. If only he could remove his spine, if a giant hand would come from the sky and tear it from his body, reach through his rib cage and remove the vertebrae, one by one, until he no longer has to get out of bed or stand up or speak to anyone, or, complete the mountain of shame that is his life, marching in aching footsteps until he reaches the soft, sweet embrace of a pain free eternity. He’s not religious but still he prays on this thought, rubbing the pukka shell necklace he bought in Mexico and wears around his neck, even when getting out of bed is not.a.possibility."
      ]
    },
    {
      offset: 10,
      factor: 1.75,
      header: " ",
      hideImage: false,
      image: "/photo-1515036551567-bf1198cccc35.jpeg",
      aspect: 1.51,
      subParagraphs: [
        "My mattress sits on the floor, which makes every one of these cleaning operations more difficult. There are globs of Fruity Pebbles running down the side of it, with the whiteness of almond milk now appearing thick and viscous, no longer like a female secretion and now something grosser, something like semen. That makes me recoil, and getting down to the carpet is going to be even more of a challenge. Descending to the floor hurts my thighs and knees, but I get there. Using Walgreens-brand paper towels, i.e. the flimsiest paper on earth, I scrape the fruity pebbles from the floor. Fuck.this.stupid.task."
      ]
    },
    {
      offset: 11,
      factor: 1.75,
      header: " ",
      hideImage: false,
      image: "/photo-1515036551567-bf1198cccc35.jpeg",
      aspect: 1.51,
      subParagraphs: [
        "What the fuck? It’s broken! The pukka shell necklace! That he was using to pray, to remind himself of Mexico, when he could get out of bed, when he could load his possessions into a woven straw bag, and sit on the beach. Smelling like coconuts and watching the water, feeling calm, not a thought of guns or nooses or giant rocks tied to his leg while standing above a river. Now, he has to find it. He has to move from his spot, naked under the blankets, and rustle around on the floor. He’ll pull himself down, one leg at a time, moving like an anemone, like a starfish, slow as an underwater creature."
      ]
    },
    {
      offset: 12,
      factor: 1.75,
      header: " ",
      hideImage: false,
      image: "/photo-1515036551567-bf1198cccc35.jpeg",
      aspect: 1.51,
      subParagraphs: [
        "There something black under there. Stuck between the floor and the mattress. This is going to be a chore to retrieve, but just last week I found my favorite floppy hat in a similar area, so I’m prepared for a second excavation. This is going to hurt – I recently burnt my fingers on the space heater while eating candy at 4am, so I’m a little worse for wear. It does occur to me that the black object might be something as disgusting as the bulbous blisters on my fingers. Something like rotted food or, worse, bugs. Bugs do exist in these rough and wild parts of my apartment, so I have to proceed with caution, hoping bugs and blisters won’t entangle themselves on the disputed zone of my right hand."
      ]
    },
    {
      offset: 13,
      factor: 1.75,
      header: " ",
      hideImage: false,
      image: "/photo-1515036551567-bf1198cccc35.jpeg",
      aspect: 1.51,
      subParagraphs: [
        "With his right hand, he kneads the carpeting. He keeps his bedroom clean – spotless – not a loose pillow or an empty cereal bowl in site. So where the fuck is the necklace? He realizes he’s going to need to stand up, a perilous task when naked and suicidal. He pulls himself to his feet, a slight moan of displeasure escaping his lips, as he shakes the blanket. Nothing loosens. Fuck me, he thinks."
      ]
    },
    {
      offset: 14,
      factor: 1.75,
      header: "TEST",
      hideImage: true,
      image: "/photo-1515036551567-bf1198cccc35.jpeg",
      aspect: 1.51,
      subParagraphs: ["Why is it under the mattress?"]
    },
    {
      offset: 15,
      factor: 1.75,
      header: " ",
      hideImage: true,
      image: "/photo-1515036551567-bf1198cccc35.jpeg",
      aspect: 1.51,
      subParagraphs: ["Once I’ve got it in my fingers, I discover it’s leather. Twisted leather. Some kind of a necklace."]
    },
    {
      offset: 16,
      factor: 1.75,
      header: " ",
      hideImage: false,
      image: "/photo-1515036551567-bf1198cccc35.jpeg",
      aspect: 1.51,
      subParagraphs: ["Why is everything…"]
    },
    {
      offset: 17,
      factor: 1.75,
      header: " ",
      hideImage: true,
      image: "/photo-1515036551567-bf1198cccc35.jpeg",
      aspect: 1.51,
      subParagraphs: ["…a chore? And why would I own anything with…"]
    },
    {
      offset: 18,
      factor: 1.75,
      header: " ",
      hideImage: false,
      image: "/photo-1515036551567-bf1198cccc35.jpeg",
      aspect: 1.51,
      subParagraphs: [" "]
    },
    {
      offset: 19,
      factor: 1.75,
      header: " ",
      hideImage: true,
      image: "/photo-1515036551567-bf1198cccc35.jpeg",
      aspect: 1.51,
      subParagraphs: ["…but after I’ve pulled past the pukka shells, there’s something different. Something…"]
    },
    {
      offset: 20,
      factor: 1.75,
      header: " ",
      hideImage: true,
      image: "/photo-1515036551567-bf1198cccc35.jpeg",
      aspect: 1.51,
      subParagraphs: ["…fleshy. Like…"]
    },
    {
      offset: 21,
      factor: 1.75,
      header: " ",
      hideImage: true,
      image: "/photo-1515036551567-bf1198cccc35.jpeg",
      aspect: 1.51,
      subParagraphs: ["a hand…"]
    },
    {
      offset: 22,
      factor: 1.75,
      header: " ",
      hideImage: false,
      image: "/photo-1515036551567-bf1198cccc35.jpeg",
      aspect: 1.51,
      subParagraphs: [" "]
    },
    {
      offset: 23,
      factor: 1.75,
      header: " ",
      hideImage: false,
      image: "/photo-1515036551567-bf1198cccc35.jpeg",
      aspect: 1.51,
      subParagraphs: ["I feel this warmth..."]
    },
    {
      offset: 24,
      factor: 1.75,
      header: " ",
      hideImage: false,
      image: "/photo-1515036551567-bf1198cccc35.jpeg",
      aspect: 1.51,
      subParagraphs: ["……and nothing feels so cold. We hold hands, me and the person under mattress. And for a moment…"]
    }
  ],
  stripes: [
    { offset: 0, color: "#000", height: 13 },
    { offset: 6.3, color: "#000", height: 20 }
  ],
  clouds: [{ x: 0, offset: 0, pos: new Vector3(), scale: 5, factor: 1 }],
  diamonds: [
    { x: 0, offset: 0.15, pos: new Vector3(), scale: 14, factor: 4 },
    { x: 2, offset: 1.1, pos: new Vector3(), scale: 1.8, factor: 2.1 },
    { x: -5, offset: 2, pos: new Vector3(), scale: 1.8, factor: 2.5 },
    { x: 0, offset: 3.2, pos: new Vector3(), scale: 1.8, factor: 1.75 },
    { x: 0, offset: 4, pos: new Vector3(), scale: 1.8, factor: 2.5 },
    { x: 2, offset: 5.5, pos: new Vector3(), scale: 2.25, factor: 0.85 },
    { x: -5, offset: 7, pos: new Vector3(), scale: 1.8, factor: 2 },
    { x: 0, offset: 8, pos: new Vector3(), scale: 2.5, factor: 2.5 },
    { x: 0, offset: 9, pos: new Vector3(), scale: 1.8, factor: 2.5 },
    { x: 2, offset: 10, pos: new Vector3(), scale: 1.8, factor: 2.1 },
    { x: -5, offset: 11, pos: new Vector3(), scale: 1.8, factor: 2.5 },
    { x: 0, offset: 12, pos: new Vector3(), scale: 1.8, factor: 1.75 },
    { x: 0, offset: 13, pos: new Vector3(), scale: 1.8, factor: 2.5 },
    { x: 2, offset: 14, pos: new Vector3(), scale: 2.25, factor: 0.85 },
    { x: -5, offset: 15, pos: new Vector3(), scale: 1.8, factor: 2 },
    { x: 0, offset: 16, pos: new Vector3(), scale: 2.5, factor: 2.5 },
    { x: 0, offset: 17, pos: new Vector3(), scale: 1.8, factor: 1 },
    { x: 2, offset: 18, pos: new Vector3(), scale: 1.8, factor: 1 },
    { x: -5, offset: 19, pos: new Vector3(), scale: 1.8, factor: 1 },
    { x: 0, offset: 20, pos: new Vector3(), scale: 1.8, factor: 1 },
    { x: 0, offset: 21, pos: new Vector3(), scale: 1.8, factor: 2.5 },
    { x: 2, offset: 22, pos: new Vector3(), scale: 2.25, factor: 0.85 },
    { x: -5, offset: 23, pos: new Vector3(), scale: 1.8, factor: 0.8 },
    { x: -5, offset: 24, pos: new Vector3(), scale: 1.8, factor: 0.7 }
  ],
  top: createRef()
}

export default state
