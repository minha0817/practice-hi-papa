const temporaryChildrenList = [
  {
    name: "Chris Son",
    picture: "https://www.healthychildren.org/SiteCollectionImagesArticleImages/bts_tummytoplay_baby.jpg?RenditionID=6",
  },
  {
    name: "Emilia Lee",
    picture: "https://childdevelopment.com.au/wp-content/uploads/what-is-child-development.jpg",

  },
  {
    name: "Tommy Mowatt",
    picture: "https://www.nspcc.org.uk/globalassets/blocks---please-dont-save-images-here/02.-keeping-children-safe/at-home/18.03.21_abuse_neglect_1195.jpg?width=400&amp;mode=crop&amp;anchor=middlecenter"
  },
  {
    name: "Olivia Kim",
    picture: "https://uploads1.bundoo.com/wp-content/uploads/2015/01/What-kind-of-child-do-you-haveTHUMB-800x500.png",

  }
]

export default function handler(req, res) {
  res.status(200).json(temporaryChildrenList);
};