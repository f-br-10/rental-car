// import all images from assets/images directory
import img01 from "../all-images/cars-img/img01.jpg";
import img02 from "../all-images/cars-img/img02.jpg";
import img03 from "../all-images/cars-img/img03.jpg";
import img04 from "../all-images/cars-img/img04.jpg";
import img05 from "../all-images/cars-img/img05.jpg";
import img06 from "../all-images/cars-img/img06.jpg";
import img07 from "../all-images/cars-img/img07.jpg";
import img08 from "../all-images/cars-img/img08.jpg";

const carData = [{
        id: 1,
        brand: "GOLF",
        rating: 100,
        carName: "GOLF 8",
        imgUrl: img01,
        model: "Model 2022",
        price: 140,
        speed: "260KH",
        seatType: "Heated seats",
        automatic: "Automatic",
        description: " The Golf 8 is a popular compact car produced by Volkswagen, known for its sporty performance, stylish design, and advanced features. It is the eighth generation of the Volkswagen Golf, which has been a perennial favorite among car enthusiasts for decades. The Golf 8 boasts a sleek and modern exterior, with distinctive character lines, a wide grille, and LED lighting elements that give it a dynamic and upscale appearance."
    },

    {
        id: 2,
        brand: "SEAT",
        rating: 102,
        carName: "SEAT LEON",
        imgUrl: img02,
        model: "Model 2022",
        price: 120,
        speed: "260KH",
        seatType: "Heated seats",
        automatic: "Automatic",
        description: " The Seat Leon is a compact hatchback produced by the Spanish automotive brand, Seat. It is known for its sporty design, engaging driving dynamics, and advanced features The Seat Leon features a sleek and modern exterior, with a dynamic profile characterized by sharp lines, a distinctive front grille, and LED lighting elements that give it a dynamic and aggressive appearance The cabin of the Seat Leon offers a comfortable and refined space, with supportive seats, ample legroom, and high-quality materials that create a premium feel. The infotainment system includes a touchscreen display with smartphone integration, allowing for seamless connectivity on the go",
    },

    {
        id: 5,
        brand: "HYUNDAI",
        rating: 94,
        carName: "HYUNDAI I30",
        imgUrl: img05,
        model: "Model-2021",
        price: 80,
        speed: "180KH",
        seatType: "Heated seats",
        automatic: "Automatic",
        description: " The Hyundai i30 is a compact hatchback produced by the South Korean automotive manufacturer, Hyundai. It is known for its modern design, practicality, and value-oriented features The Hyundai i30 features a contemporary and sleek exterior, with a streamlined profile, a distinctive cascading grille, and sharp LED headlights that create a bold and sophisticated look. The cabin of the Hyundai i30 offers a comfortable and well-designed space, with supportive seats, ample room for passengers, and a range of convenience features, such as a touchscreen infotainment system with smartphone connectivity, rearview camera, and available options for heated seats and dual-zone climate control"
    },


    {
        id: 3,
        brand: "AUDI",
        rating: 132,
        carName: "AUDI RS3",
        imgUrl: img03,
        model: "Model 2023",
        price: 190,
        speed: "300kH",
        seatType: "Heated seats",
        automatic: "Automatic",
        description: " The Audi RS3 is a high-performance compact sedan produced by the German luxury automotive brand, Audi. It is known for its powerful engine, sporty design, and advanced performance features The Audi RS3 features a dynamic and aggressive exterior design, with bold lines, a distinctive front grille, and larger air intakes that give it a muscular and athletic appearance. The cabin of the Audi RS3 offers a premium and sporty interior, with supportive sports seats, carbon fiber accents, and a range of advanced technologies, including a virtual cockpit digital instrument cluster, a high-resolution infotainment system with smartphone integration, and a premium sound system "
    },

    {
        id: 4,
        brand: "CLIO",
        rating: 95,
        carName: "CLIO DINAMYQUE",
        imgUrl: img04,
        model: "Model-2021",
        price: 70,
        speed: "170KH",
        seatType: "Heated seats",
        automatic: "Automatic",
        description: " The Clio Dynamique is a popular trim level of the Renault Clio, which is a compact hatchback produced by the French automotive manufacturer, Renault. It is known for its stylish design, agile handling, and modern features The Clio Dynamique features a contemporary and eye-catching exterior, with a sleek and aerodynamic profile, distinctive front grille, and attractive LED lighting elements. The cabin of the Clio Dynamique offers a comfortable and well-appointed space, with supportive seats, modern materials, and a range of standard and available features, such as a touchscreen infotainment system, smartphone connectivity, rearview camera, and climate control"
    }, {
        id: 8,
        brand: "FIAT",
        rating: 52,
        carName: "FIAT DUCATO",
        imgUrl: img08,
        model: "Model 3",
        price: 200,
        speed: "170KH",
        seatType: "Heated seats",
        automatic: "Automatic",
        description: "The Fiat Ducato is a versatile and capable large van produced by the Italian automotive manufacturer, Fiat Professional. It is known for its spacious cargo capacity, practicality, and reliability The Fiat Ducato features a functional and utilitarian exterior design, with a boxy shape, large sliding side doors, and rear barn doors that provide easy access to the cargo area. The cabin of the Ducato offers a comfortable and functional workspace for the driver, with supportive seats, a range of storage compartments, and modern technologies, such as a touchscreen infotainment system with navigation, Bluetooth connectivity, and rearview camera"
    },

    {
        id: 6,
        brand: "RANGE ROVER",
        rating: 82,
        carName: "RANGE ROVER SVR",
        imgUrl: img07,
        model: "Model 2023",
        price: 300,
        speed: "300KH",
        seatType: "Heated seats",
        automatic: "Automatic",
        description: "The Range Rover SVR is a high-performance luxury SUV produced by the British automotive manufacturer, Land Rover. It is known for its powerful engine, off-road capability, and luxurious features The Range Rover SVR features a distinctive and aggressive exterior design, with a bold front grille, enlarged air intakes, and unique styling elements that give it a sporty and dynamic appearance. The cabin of the SVR offers a refined and opulent space, with premium materials, comfortable seating, and a range of high-end features, such as a touchscreen infotainment system, premium audio system, and advanced climate control"

    },
    {
        id: 7,
        brand: "Mercedes",
        rating: 119,
        carName: "Mercedes CLA 220",
        imgUrl: img06,
        model: "Model 2022",
        price: 85,
        speed: "260KH",
        seatType: "Heated seats",
        automatic: "Automatic",
        description: " The Mercedes-Benz CLA 220 is a luxury compact sedan produced by the German automotive manufacturer, Mercedes-Benz. It is known for its sleek design, advanced technologies, and refined driving experience The CLA 220 features a sporty and modern exterior design, with a low-slung roofline, muscular lines, and a coupe-like silhouette that gives it a distinctive and dynamic appearance. The cabin of the CLA 220 offers a sophisticated and upscale space, with premium materials, comfortable seating, and a range of high-tech features, such as a widescreen infotainment system, digital instrument cluster, and advanced climate control. ",
    },

];

export default carData;