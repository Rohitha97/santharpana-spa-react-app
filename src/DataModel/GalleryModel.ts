interface ServiceGallery {
  imgSrc: string;
  /** Describes the photo: what image search and screen readers get. */
  alt: string;
}

const servicesImg: ServiceGallery[] = [
  { imgSrc: "images/gallery/4.jpeg", alt: "Medicinal herb growing in the Santharpana herbal garden, Sigiriya" },
  { imgSrc: "images/gallery/5.jpeg", alt: "Stone-lined path through the herbal garden at Santharpana" },
  { imgSrc: "images/gallery/8.jpeg", alt: "Vanilla plant with a Sinhala and English name board in the garden" },
  { imgSrc: "images/gallery/11.jpeg", alt: "Wooden herbal steam bath cabinet in a treatment room" },
  { imgSrc: "images/gallery/13.jpeg", alt: "Wooden Ayurvedic massage bed laid with fresh medicinal leaves" },
  { imgSrc: "images/gallery/14.jpeg", alt: "Herbal oils and fresh towels ready in a treatment room" },
  { imgSrc: "images/gallery/22.jpeg", alt: "Clay bowl for herbal oil on a wooden shelf in a treatment room" },
  { imgSrc: "images/gallery/26.jpeg", alt: "Traditional wooden herbal steam box lined with leaves" },
  { imgSrc: "images/gallery/2.jpeg", alt: "Herb beds and greenery in the Santharpana garden, Sigiriya" },
  { imgSrc: "images/gallery/6.jpeg", alt: "Treatment cottages among the trees of the herbal garden" },
  { imgSrc: "images/gallery/10.jpeg", alt: "Private massage room with green curtains and a leaf-lined bed" },
  { imgSrc: "images/gallery/24.jpeg", alt: "Outdoor seating area outside the Santharpana spa buildings" },
];
export { servicesImg, type ServiceGallery };
