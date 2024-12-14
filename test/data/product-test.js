import { Product, Clothing, Appliance } from "../../data/products.js";

describe('test suite : Class Test', () => {
  it('generate object using Product class', () => {

    const productTest = new Product({id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      image: "images/products/athletic-cotton-socks-6-pairs.jpg",
      name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
      rating: {
        stars: 4.5,
        count: 87
      },
      priceCents: 1090,
      keywords: [
        "socks",
        "sports",
        "apparel"
      ]
    })
    expect(productTest instanceof Product).toEqual(true);
    expect(productTest.id).toEqual("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
    expect(productTest.extraInfoHTML()).toEqual('')
  })

  it('generate object using Clothing class', () => {

    const productTest = new Clothing({
      id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
      image: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
      name: "Adults Plain Cotton T-Shirt - 2 Pack",
      rating: {
        stars: 4.5,
        count: 56
      },
      priceCents: 799,
      keywords: [
        "tshirts",
        "apparel",
        "mens"
      ],
      type: "clothing",
      sizeChartLink: "images/clothing-size-chart.png"
    })
    expect(productTest instanceof Clothing).toEqual(true);
    expect(productTest.id).toEqual("83d4ca15-0f35-48f5-b7a3-1ea210004f2e");
    expect(productTest.extraInfoHTML()).toContain("images/clothing-size-chart.png")
  })
  it('generate object using Appliance class', () => {

    const productTest = new Appliance({
      id: "54e0eccd-8f36-462b-b68a-8182611d9add",
      image: "images/products/black-2-slot-toaster.jpg",
      name: "2 Slot Toaster - Black",
      rating: {
        stars: 5,
        count: 2197
      },
      priceCents: 1899,
      keywords: [
        "toaster",
        "kitchen",
        "appliances"
      ],
      type: "appliance",
      instructionLink:"images/appliance-instructions.png",
      warrantyLink:"images/appliance-warranty.png"
    })
    expect(productTest instanceof Appliance).toEqual(true);
    expect(productTest.id).toEqual("54e0eccd-8f36-462b-b68a-8182611d9add");
    expect(productTest.warrantyLink).toEqual("images/appliance-warranty.png");
    expect(productTest.extraInfoHTML()).toContain("images/appliance-instructions.png")
  })
})