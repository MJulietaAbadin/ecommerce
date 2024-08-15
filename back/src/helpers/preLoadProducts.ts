import { AppDataSource } from "../config/dataSource";
import { Product } from "../entities/Product";
import { ProductRepository } from "../repositories/product.repository";

interface IProduct {
  name: string;
  price: number;
  description: string;
  image: string;
  categoryId: number;
  stock: number;
}

const productsToPreLoad: IProduct[] = [
  {
    name: "SQUARE NECK BODYSUIT",
    price: 61,
    description:
      "A square neckline and low scoop back make this bodysuit a flattering base layer or everyday wardrobe item. Features a high cut leg opening and thong back that remains invisible under clothing.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/products/SKIMS-BODYSUIT-BS-SCN-0294-AO-ONX_FR_31651d53-4c5b-40ff-b8d7-9ab839f1f249.jpg?v=1624302281&width=832",
    categoryId: 7,
    stock: 30,
  },
  {
    name: "T-SHIRT BODYSUIT",
    price: 65,
    description:
      "Like your favorite tee, but better! This molds-to-your-body short sleeve bodysuit features a buttery soft fabric, high crew neckline, and brief back for a comfortable fit. Snap closures make it easy to get on and off.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/products/SKIMS-BODYSUIT-BS-TSH-0752-CL-ONX_FR.jpg?v=1624308627&width=832",
    categoryId: 7,
    stock: 20,
  },
  {
    name: "LONG SLEEVE CREW NECK BODYSUIT",
    price: 71,
    description:
      "Our classic crew neck long sleeve bodysuit updated in lightweight, buttery soft fabric that hugs your curves. An essential styling piece to add to your rotation.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/products/SKIMS-BODYSUIT-AP-CRW-0739-CL-ONX_FR.jpg?v=1624308814&width=832",
    categoryId: 7,
    stock: 40,
  },
  {
    name: "CAMI BODYSUIT",
    price: 61,
    description:
      "With its wide scoop neckline and low back providing the perfect foundation under clothing, this Cami Bodysuit is an essential wardrobe foundation. Features a high cut leg opening and thong back that remains invisible under clothing.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/products/SKIMS-BODYSUIT-BS-BST-066-AO-ONX_FR_6ad82a40-e68e-414b-9eb4-4b65f102b93a.jpg?v=1624302064&width=832",
    categoryId: 7,
    stock: 30,
  },
  {
    name: "HIGH NECK BODYSUIT",
    price: 61,
    description:
      "A classic, everyday style, this High Neck Bodysuit provides coverage and supportive stretch that hugs your body. This bodysuit is the perfect base layer and features a high cut leg opening and thong back that remains invisible under clothing.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/products/SKIMS-BODYSUIT-BS-BST-0232-AO-ONX_FR_ca7a61b8-4857-442f-8a97-b82eb27fbdb4.jpg?v=1624302180&width=832",
    categoryId: 7,
    stock: 40,
  },
  {
    name: "CONTRAST TRIM SCOOP NECK BODYSUIT",
    price: 59,
    description:
      "First-place style, second-skin comfort. This sporty bodysuit comfortably enhances your curves thanks to our beloved buttery fabric that is soft and stretchy beyond compare. Features contrast trim along the sexy scoop neck, adjustable straps, sides, and legs. Complete with a 100% cotton gusset that snaps. Fits true to size.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/BD-THG-5144W-ONM-QB-SKIMS-BODYSUIT_0007-FR.jpg?v=1718225846&width=832",
    categoryId: 7,
    stock: 40,
  },
  {
    name: "CONTRAST TRIM T-SHIRT BODYSUIT",
    price: 63,
    description:
      "Sporty, smooth, stylish bodysuit that a major win for your wardrobe. This curve-hugging bodysuit flatters your figure with our stretchy, five-star fabric that feels like butter. Elevated with contrast details at the crew neck, short sleeves, sides, and leg openings. Features a thong back with snaps at the 100% cotton gusset. Fits true to size.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/BD-THG-5414W-PMT-QC-SKIMS-BOSYUIT_0002-FR.jpg?v=1718226048&width=832",
    categoryId: 7,
    stock: 30,
  },
  {
    name: "ESSENTIAL CREW NECK SLEEVELESS BODYSUIT",
    price: 69,
    description:
      "This crew neck sleeveless bodysuit lightly contours your body while being comfortable for all-day wear. Features a raw cut neckline, double snap closure at the bottom gusset, and a thong back for no panty lines. Fits true to size.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/HS-BST-0113-STO-OC-SKIMS-BODYSUIT_0007-FR.jpg?v=1713901871&width=832",
    categoryId: 7,
    stock: 30,
  },
  {
    name: "ESSENTIAL SCOOP NECK BODYSUIT",
    price: 69,
    description:
      "This curve-hugging scoop neck bodysuit is a comfortable, smoothing staple that you’ll keep reaching for. Features a wide double scoop neckline, thin shoulder straps, a double snap closure at the bottom gusset, and a brief back for moderate coverage. Fits true to size.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/BS-SCN-0453-STO-OC-SKIMS-BODYSUIT_0006-FR.jpg?v=1713901878&width=832",
    categoryId: 7,
    stock: 30,
  },
  {
    name: "SQUARE NECK BODYSUIT",
    price: 60,
    description:
      "A square neckline and low scoop back make this bodysuit a flattering base layer or everyday wardrobe item. Features a high cut leg opening and thong back that remains invisible under clothing.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/products/SKIMS-BODYSUIT-BS-SCN-0294-AO-CLY_FR_c058340f-e546-4579-b005-8676b877a52e.jpg?v=1624302234&width=832",
    categoryId: 7,
    stock: 40,
  },
  {
    name: "MID THIGH BODYSUIT",
    price: 73,
    description:
      "The sculpting bodysuit all over your feed, updated for an even better fit. Wear this mid thigh bodysuit for strong compression and targeted control along the waist, tummy, and legs, plus butt-enhancing pockets for a lifted look. Features front pique stitching along the front and sides for a defined and supported bust, adjustable straps, a wide crotch for added coverage, and an open gusset. Fits true to size. Also available in petite sizes.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/products/SKIMS-SHAPEWEAR-BD-MDT-3372-IE-ONX_0004_FR.jpg?v=1682112296&width=832",
    categoryId: 5,
    stock: 30,
  },
  {
    name: "COTON RIB ONESIE",
    price: 79,
    description:
      "Our signature mid-thigh bodysuit silhouette, now in our super comfortable cotton. Take this one-and-done style and wear it alone or layer it with your favorite blazer, sweatshirt, or jacket! Fits true to size.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/SKIMS-LOUNGEWEAR-AP-BSS-1490-RC-SOT_0001_FR.jpg?v=1690327671&width=832",
    categoryId: 5,
    stock: 50,
  },
  {
    name: "ROMANCE ONESIE",
    price: 71,
    description:
      "This flattering, figure-hugging onesie has ultra-romantic stretchy lace details that you’ll fall in love with. Features double-lining, a front scoop neckline, and adjustable straps. Fits true to size.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/SKIMS-LOUNGEWEAR-OS-MDT-4131-FA-BRZ_0005_FR_82306826-8cfd-45bc-807f-8fb381ee0e31.jpg?v=1694625417&width=832",
    categoryId: 5,
    stock: 60,
  },
  {
    name: "SCOOP ONESIE",
    price: 71,
    description:
      "You’ll love this slinky-soft, ribbed, body-hugging onesie. Features adjustable straps, a shelf bra, and a straight neckline. Fits true to size.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/OS-MDT-2695-ONX-HC-SKIMS-LOUNGEWEAR_1312-FR_025cff22-fe20-4e05-af97-f4669cfbfce1.jpg?v=1708546966&width=832",
    categoryId: 5,
    stock: 30,
  },
  {
    name: "CONTRAST TRIM ONESIE",
    price: 63,
    description:
      "This onesie is a perfect ten. Made with our signature, best-selling fabric that feels like butter and stretches to twice its size without losing shape, this one-and-done style never drops the ball on comfort. Features sporty contrast trim at the scoop neck, adjustable straps, sides, and dolphin hem. Complete with a 100% cotton gusset lining. Fits true to size.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/OS-SRT-5145W-ONM-QB-SKIMS-BODYSUIT_0006-FR.jpg?v=1718226172&width=832",
    categoryId: 5,
    stock: 30,
  },
  {
    name: "SQUARE NECK ONESIE",
    price: 79,
    description:
      "The onesie your wardrobe is missing. This sexy, low-back style is made with a soft, stretchy fabric that hugs your curves. Features an interior mesh bra with underbust elastic for light bust support, a wide square neck, and a 100% cotton gusset. Hits at the mid thigh and fits true to size.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/OS-ONS-6136W-WON-SB-SKIMS-BODYSUIT_0007-FR.jpg?v=1721262575&width=832",
    categoryId: 5,
    stock: 40,
  },
  {
    name: "LOW BACK MID THIGH BODYSUIT",
    price: 75,
    description:
      "A sculpting bodysuit that sculpts silhouette, cinches waist, and smooth thighs while providing support and lift for your curves. Featuring a deep scoop back that makes it the perfect backless shapewear option.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/products/SKIMS-SHAPEWEAR-BD-MDT-3371-IE-ONX_0003_FR.jpg?v=1682126990&width=832",
    categoryId: 5,
    stock: 20,
  },
  {
    name: "DEEP PLUNGE HALTER ONESIE",
    price: 75,
    description:
      "This plunge-front style is the one. Designed in our soft and stretchy ribbed modal, this onesie is sexy and so comfortable. Features a deep V-neck and a fitted silhouette that highlights your curves. Complete with a 100% cotton gusset and hits at the mid thigh. Wear with our Seamless Sculpt Plunge Short Bodysuit for a sculpted look and feel. Fits true to size.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/OS-ONS-6082W-ONX-RB-SKIMS-BODYSUIT_0009-FR.jpg?v=1719413567&width=832",
    categoryId: 5,
    stock: 10,
  },
  {
    name: "LONG SLEEVE ONESIE",
    price: 89,
    description:
      "One-and-done stunner. This long sleeve one-piece is designed with two layers of our ultra-stretchy, buttery fabric at the body and has sheer, lacy legs with scalloped edges. A lust-worthy, low square neck and henley buttons at the center front accentuate your bust. Features long sleeves and hits at mid-thigh. Perfect for anyone who wants to wow after hours. Fits true to size.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/OS-MDT-5167W-ONX-QB-SKIMS-BODYSUIT_0004-FR.jpg?v=1716422257&width=832",
    categoryId: 5,
    stock: 10,
  },
  {
    name: "ZIP FRONT ONESIE",
    price: 91,
    description:
      "Cool, sexy, curvy and step out in style. This fitted onesie flatters but never flattens with mid-level compression at the waist and contouring at the bust for added definition. The supportive, stretchy fabric has a breathable feel and a smooth, seamless finish. Features a zipper front beneath the crew neck and a 100% cotton gusset. Hits at the mid-thigh and fits true to size.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/OS-ONS-6939W-ONX-RB-SKIMS-BODYSUIT_0030-FR.jpg?v=1718764367&width=832",
    categoryId: 5,
    stock: 30,
  },
  {
    name: "ZIP FRONT CATSUIT",
    price: 109,
    description:
      "A catsuit for your sexiest curves. This fitted, waist-defining style smooths all over and accentuates your best assets. Features perfectly placed style lines that enhance your bust and a sleek, supportive fabric for comfort. Complete with a sporty zipper at the center front and a 100% cotton gusset lining. Hits at the ankle and fits true to size.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/OS-ONS-6725W-ONX-RB-SKIMS-BODYSUIT_0002-FR.jpg?v=1718759132&width=832",
    categoryId: 5,
    stock: 30,
  },
  {
    name: "TANK ONESIE",
    price: 69,
    description:
      "The cutest onesie. This incredibly comfortable style is made with a lightweight, ultra-stretchy pointelle fabric that’s curve-hugging and cute. Detailed with chic ruching at the center front and feminine, scalloped edges. Features a flattering scoop neck and adjustable elastic straps. Hits at the mid-thigh and fits true to size.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/OS-MDT-5398W-BBP-OC-SKIMS-BODYSUIT_0004-FR.jpg?v=1717708552&width=832",
    categoryId: 5,
    stock: 30,
  },
  {
    name: "LONG SLIP DRESS",
    price: 81,
    description:
      "The internet’s obsessed with this dress, and you will be too. Made with our signature modal rib fabric, this addictively soft, full-length silhouette brings out curves you didn’t even know you had with its slinky feel and body-hugging fit. Features a flattering straight neck and adjustable spaghetti straps. Fits true to size.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/AP-DRS-0596-ONX-HC-SKIMS-LOUNGEWEAR_3140-FR.jpg?v=1708554715&width=832",
    categoryId: 2,
    stock: 15,
  },
  {
    name: "LONG SLEEVE DRESS",
    price: 91,
    description:
      "The iconic Soft Lounge dress you know and love, but now with sleeves. Embrace every single one of your curves with its slinky silhouette, ultra-flattering square neckline, and drapey long ribbed slip.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/products/SKIMS-LOUNGEWEAR-AP-DRS-1701-KB-ONX_FR.jpg?v=1637024085&width=832",
    categoryId: 2,
    stock: 25,
  },
  {
    name: "SLIP DRESS",
    price: 69,
    description:
      "A buttery soft mini dress that hugs your curves. Form-fitting and lightweight, this style is perfect to wear under other dresses as second-skin lining.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/products/SKIMS-LOUNGEWEAR-AP-SLP-0651-CJ-ONX_FR.jpg?v=1621642928&width=832",
    categoryId: 2,
    stock: 23,
  },
  {
    name: "TUBE DRESS",
    price: 81,
    description:
      "This buttery-soft and stretchy strapless maxi dress will become your go-to for all your plans, double-lined with Fits Everybody fabric for a flattering, body-hugging fit. Fits true to size.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/SKIMS-LOUNGEWEAR-AP-DRS-1959-NC-ONX_007_FR_fdb51cc3-c675-4ceb-92e1-fa63680e50a4.jpg?v=1686603418&width=832",
    categoryId: 2,
    stock: 20,
  },
  {
    name: "DEEP PLUNGE HALTER LONG DRESS",
    price: 85,
    description:
      "The hottest halter dress. This full-length style flatters your figure with its fitted silhouette and sexy, deep-v neckline. Designed in our incredibly soft, stretchy ribbed modal fabric that effortlessly drapes over your body. Pairs perfectly with our Seamless Sculpt Plunge Thong Bodysuit or Plunge Short Bodysuit for a sculpted finish. Fits true to size.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/DS-DRS-6420W-ONX-RB-SKIMS-DRESS_0001-FR.jpg?v=1719413554&width=832",
    categoryId: 2,
    stock: 14,
  },
  {
    name: "LONG TANK DRESS",
    price: 75,
    description:
      "Look cute from your couch to your coffee run. Made with our beloved modal rib fabric that accentuates your curves, this full-length silhouette is comfortable for lounging and cute enough to leave the house in. Features a classic crew neck with a slight racer back and front. Fits true to size.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/DS-DRS-6351W-ONX-NB-SKIMS-DRESS_0004-FR.jpg?v=1715635312&width=832",
    categoryId: 2,
    stock: 30,
  },
  {
    name: "SLIP DRESS",
    price: 0,
    description:
      "Slip into this buttery-soft, body-hugging mini dress with romantic stretchy lace trims. Features a front scoop neckline and adjustable straps. Fits true to size.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/products/SKIMS-LOUNGEWEAR-DR-MIN-2686-BD-ONX_0005_fd6321d7-a4a2-439c-a87b-da8c40e9887d.jpg?v=1685752463&width=832",
    categoryId: 2,
    stock: 20,
  },
  {
    name: "PETITE LONG SLEEVE DRESS",
    price: 91,
    description:
      "Our viral lounge dress, now updated to perfectly fit petite frames. Made for staying in and stepping out, the social sensation features our super soft, slinky ribbed fabric for a drapey, body-hugging fit and beyond comfortable feel you can’t get enough of. Fits true to size; designed for 5’3” and under.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/DR-MID-4352-ONX-ZA-SKIMS-LOUNGEWEAR_005_FR.jpg?v=1698789262&width=832",
    categoryId: 2,
    stock: 30,
  },
  {
    name: "LONG CAMI DRESS",
    price: 75,
    description:
      "Cotton has never looked this chic. This versatile, fitted silhouette is made with our soft rib fabric that breathes and comfortably hugs your body. Features a chic scoop neck, a subtle racerback with a SKIMS logo label, and smooth edging along the straps and armholes. The full length hem has a center back slit for easy walking. Fits true to size.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/DR-MAX-5521W-SOT-UA-SKIMS-LOUNGEWEAR_0002-FR.jpg?v=1723579567&width=832",
    categoryId: 2,
    stock: 10,
  },
  {
    name: "MOCK NECK LONG DRESS",
    price: 89,
    description:
      "A sexy night-out number for your weekend wardrobe. This fitted dress is made with a sheer, silky fabric that lies smoothly on your skin. The interior bodysuit adds coverage and features a brief back with snaps at the 100% cotton gusset. Detailed with a chic mock neck and a raw hem that hits the floor. Fits true to size.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/DS-DRS-6886W-GUN-SA-SKIMS-DRESS_0005-FR.jpg?v=1720556858&width=832",
    categoryId: 2,
    stock: 15,
  },
  {
    name: "ROMANCE LACE DRESS",
    price: 89,
    description:
      "The sweetest little thing. This mini dress is made for romance with its sheer silk fabric and delicate lace along the triangle neckline, underarm, bust, side seams, and hem. Detailed with a dainty rosette at the center front and a left side slit. Features continuous shoulder straps that tie in the back for an adjustable fit. Fits true to size.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/DS-DRS-6945W-ONM-RB-SKIMS-DRESS_0010-FR.jpg?v=1719589566&width=832",
    categoryId: 2,
    stock: 15,
  },
  {
    name: "PICOT MINI DRESS",
    price: 89,
    description:
      "Serve your sexiest curves in camo. This sheer after-hours mini is light and airy thanks to our soft, stretchy mesh that hugs your curves. Features unlined half cups that give you a light lift and underwire for support. Contrast picot trim lines the adjustable elastic straps, underbust, and edges and a SKIMS logo label sits at the center front. Fits true to size.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/DR-DRS-5928W-DCM-TB-SKIMS-CLOTHING_0007-FR.jpg?v=1721843041&width=832",
    categoryId: 2,
    stock: 35,
  },
  {
    name: "TANK MINI DRESS",
    price: 69,
    description:
      "A boost to your comfort and curves. This hot mini dress flatters your figure with its super stretchy fabric and fitted silhouette. Feels ultra-soft and lightweight for indoor and outdoor comfort on warmer days. Features chic tonal edges at the wide scoop neck, armholes, and hem. Fits true to size.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/DR-DRS-6337W-MNM-OC-SKIMS-DRESS_0021-FR.jpg?v=1716940686&width=832",
    categoryId: 2,
    stock: 10,
  },
  {
    name: "MOCK NECK LONG SLEEVE LONG DRESS",
    price: 89,
    description:
      "Turn heads when you head out in this dress. This sheer style glides over your curves with its silky-smooth, stretchy fabric. Features a sexy, fitted silhouette that hits the floor and a mock neck. Detailed with raw edges at the long sleeves and hem. Layer with coordinating Fits Everybody styles for a tonal look. Fits true to size.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/DS-DRS-6884W-GUN-SA-SKIMS-DRESS_0002-FR.jpg?v=1720556825&width=832",
    categoryId: 2,
    stock: 13,
  },
  {
    name: "CLASSIC ZIP UP HOODIE",
    price: 79,
    description:
      "You’ll never want to lounge without this classic full zip-up hoodie made with the softest fleece ever and now updated with a slightly longer length and more open neckline for your best fit. Features front side pockets plus a ribbed waistband and cuffs. Fits true to size.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/SKIMS-LOUNGEWEAR-TP-ZUP-4476-SC-ONX_0001_FR.jpg?v=1692822773&width=832",
    categoryId: 8,
    stock: 30,
  },
  {
    name: "COTTON CLASSIC HOODIE",
    price: 77,
    description:
      "Your lounge collection isn’t complete without this classic pullover hoodie made with our softest fleece fabric and updated with a slightly longer length and more open neckline. Features front kangaroo pockets, a double-lined hood, and a ribbed waistband and cuffs. Fits true to size.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/SKIMS-LOUNGEWEAR-TP-PLO-4475-SC-ONX_0001_FR.jpg?v=1692822635&width=832",
    categoryId: 8,
    stock: 20,
  },
  {
    name: "CLASSIC CREWNECK",
    price: 69,
    description:
      "The ultra-soft classic crewneck you love to lounge in all day, updated with a more open neckline and slightly longer length for a more comfortable fit. Features a ribbed waistband and cuffs. Fits true to size.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/SKIMS-LOUNGEWEAR-TP-PLO-4474-SC-ONX_0001_FR.jpg?v=1692822535&width=832",
    categoryId: 8,
    stock: 10,
  },
  {
    name: "CLASSIC ZIP UP HOODIE",
    price: 75,
    description:
      "Consider your lounge uniform complete. This classic zip-up is made with cloud-like, 100% organic cotton for comfort you’ll sport on repeat. Features front pockets and ribbed details at the cuffs and bottom band. Fits true to size.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/TP-ZUP-4905-SLB-IC-SKIMS-LOUNGEWEAR_0005-FR.jpg?v=1708919642&width=832",
    categoryId: 8,
    stock: 30,
  },
  {
    name: "OVERSIZED HOODIE",
    price: 77,
    description:
      "Perfect for weekends or whenever. This comfortable style is made with our soft, midweight organic cotton in an oversized fit you’ll love lounging or leaving the house in. Features a front pocket and ribbed details at the cuffs and hem. Fits true to size for an oversized fit.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/PL-PLO-6113W-OYS-AA-SKIMS-LOUNGEWEAR_0010-FR.jpg?v=1721259415&width=832",
    categoryId: 8,
    stock: 40,
  },
  {
    name: "ZIP UP HOODIE",
    price: 67,
    description:
      "The soft cotton you crave, now in a super comfortable hoodie constructed with our signature breathable, all-over ribbed fabric. Features a full front zipper. Fits true to size.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/TP-ZUP-4854-SOT-UA-SKIMS-LOUNGEWEAR_0007-FR.jpg?v=1723579627&width=832",
    categoryId: 8,
    stock: 20,
  },
  {
    name: "SHRUNKEN ZIP UP HOODIE",
    price: 73,
    description:
      "Coffee runs to errands and this hoodie is down for whatever. This comfy style is made with our ultra-soft, 100% organic cotton in a chic, shrunken silhouette. Features a front kangaroo pocket and ribbed details at the cuff and hem. Fits true to size.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/TP-ZUP-5555W-OYS-AA-SKIMS-LOUNGEWEAR_0008-FR.jpg?v=1721259436&width=832",
    categoryId: 8,
    stock: 30,
  },
  {
    name: "CLASSIC CREWNECK",
    price: 69,
    description:
      "An everyday wardrobe essential. This midweight pullover is made with the softest 100% organic cotton for major comfort while running errands or relaxing. Features ribbed details at the raglan sleeve cuffs, classic crew neck, and hem. Fits true to size.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/PL-PLO-6112W-OYS-AA-SKIMS-LOUNGEWEAR_0010-FR.jpg?v=1721259400&width=832",
    categoryId: 8,
    stock: 56,
  },
  {
    name: "FRENCH CLASSIC HOODIE",
    price: 73,
    description:
      "Off-duty is chicer in this 100% organic cotton hoodie. Incredibly soft and supremely comfortable, this pullover style features front kangaroo pockets and ribbed details at the cuffs and bottom band. Fits true to size.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/TP-PLO-5251W-ASH-IB-SKIMS-LOUNGEWEAR_0004-FR_0e2ae500-369b-45fb-ba87-08f84c7a1bc2.jpg?v=1708715658&width=832",
    categoryId: 8,
    stock: 30,
  },
  {
    name: "TRACK JACKET",
    price: 71,
    description:
      "Up your off-duty game in this fitted track jacket with a sporty look and feel. Features a mock neck, full front zipper and two pockets as well as elastic cuffs, neck band, and bottom band. Fits true to size.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/TP-ZUP-4334-ZNC-SC-SKIMS-LOUNGEWEAR_0007-FR.jpg?v=1721262516&width=832",
    categoryId: 8,
    stock: 20,
  },
  {
    name: "SHRUNKEN HALF ZIP",
    price: 73,
    description:
      "A half zip you’ll be fully obsessed with. This off-duty style has a chic, shrunken silhouette with a sporty half zipper in the front. Made with our super soft and comfortable 100% organic cotton. Features a front kangaroo pocket and ribbed details at the cuff and hem. Fits true to size.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/PL-PLO-6115W-OYS-AA-SKIMS-LOUNGEWEAR_0009-FR.jpg?v=1721259418&width=832",
    categoryId: 8,
    stock: 10,
  },
  {
    name: "OVERSIZED ZIP UP HOODIE",
    price: 79,
    description:
      "A must-have hoodie. Made with a midweight, 100% organic cotton, this super soft hoodie is comfortable while on the go or on the couch. Features a front zipper, pockets, and ribbed details at the cuffs and hem. Fits true to size for an oversized fit.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/ZU-ZUP-6202W-TAU-AA-SKIMS-LOUNGEWEAR_0009-FR.jpg?v=1721259374&width=832",
    categoryId: 8,
    stock: 40,
  },
  {
    name: "CLASSIC COTTON HOODIE",
    price: 77,
    description:
      "Your lounge collection isn’t complete without this classic pullover hoodie made with our softest fleece fabric and updated with a slightly longer length and more open neckline. Features front kangaroo pockets, a double-lined hood, and a ribbed waistband and cuffs. Fits true to size.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/TP-PLO-4475-CND-TB-SKIMS-LOUNGEWEAR_0004-FR.jpg?v=1723572313&width=832",
    categoryId: 8,
    stock: 30,
  },
  {
    name: "OVERSIZED QUARTER ZIP PULLOVER",
    price: 75,
    description:
      "The perfect pullover. This wear-everywhere style is made from our soft and plush fleece that feels like a cloud. Features a collared half zip at the center front and a perfectly oversized fit with dropped shoulders. Detailed with ribbing at the cuffs and hem. Fits true to size.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/PL-PLO-6781W-CND-TB-SKIMS-LOUNGEWEAR_0008-FR.jpg?v=1723571091&width=832",
    categoryId: 8,
    stock: 25,
  },
  {
    name: "COTTON JOGGER",
    price: 69,
    description:
      "This super-soft, leveled-up classic has a relaxed fit for your comfiest days at home and beyond. Features an interior drawcord for an adjustable fit at the waist and elasticized cuffs at the bottom hem. Fits true to size with a newly updated waist fit.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/SKIMS-LOUNGEWEAR-BO-JOG-4168-SC-ONX_0001_FR.jpg?v=1692822856&width=832",
    categoryId: 3,
    stock: 20,
  },
  {
    name: "FOLDOVER PANT",
    price: 65,
    description:
      "Your go-to pant for looking cute and feeling comfy. Our beloved lounge style features a comfortable folded waist that adds a feminine touch to your looks at home and on the go. Made with our signature soft, breathable jersey fabric that enhances your curves and comfort. Pair with a SKIMS Cotton Jersey tee or tank for a selfie-worthy set. Fits true to size.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/SKIMS-LOUNGEWEAR-AP-PNT-0715-SC-SOT_0001_FR_933a7ac9-0453-4bff-bb95-af1e6ff59763.jpg?v=1715799246&width=832",
    categoryId: 3,
    stock: 30,
  },
  {
    name: "LOOSE PANT",
    price: 59,
    description:
      "A straight-leg relaxed-fit pant in the ultra-soft Boyfriend fabric you can’t get enough of. This full-length style features an elastic waistband with logo details and 2 side pockets. Fits true to size.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/products/SKIMS-LOUNGEWEAR-AP-PNT-1371-BD-ONX_0002_FR.jpg?v=1676690814&width=832",
    categoryId: 3,
    stock: 30,
  },
  {
    name: "STRAIGHT LEG PANT",
    price: 61,
    description:
      "The comfiest lounge staple, designed with your favorite ultra-soft Cotton Jersey fabric. This straight-leg pant style features a ribbed waistband with an exterior drawcord at the waist. Make it a set with the Cotton Jersey T-Shirt. Fits true to size.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/products/SKIMS-LOUNGEWEAR-AP-PNT-1384-BD-SOT_0004_FR.jpg?v=1692227697&width=832",
    categoryId: 3,
    stock: 20,
  },
  {
    name: "CLASSIC STRAIGHT LEG PANT",
    price: 73,
    description:
      "Lounge like never before in these classic fit, straight leg pants made with our softest Cotton Fleece for perfect warmth. Complete with side pockets and an interior drawstring at the waist for an adjustable fit. Fits true to size.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/BO-STR-4003-ONX-FR-YB-SKIMS-LOUNGEWEAR_0001.jpg?v=1699304296&width=832",
    categoryId: 3,
    stock: 20,
  },
  {
    name: "FOLDOVER PANT",
    price: 69,
    description:
      "This soft, smooth, and stretchy ribbed pant features a throwback-inspired flare with a foldover waistband.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/products/SKIMS-LOUNGEWEAR-AP-LPT-1171--LF-ONX_FR.jpg?v=1715361157&width=832",
    categoryId: 3,
    stock: 25,
  },
  {
    name: "LEGGING",
    price: 67,
    description:
      "This ultra-soft, ankle-length legging has a flattering high waist fit and offers seamless construction for a super-smooth look and feel. Fits true to size.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/SKIMS-LOUNGEWEAR-AP-LEG-2445-NC-ECL_0016_FR_fd35ca24-e412-467b-8d33-1779dab1a5f1.jpg?v=1707957785&width=832",
    categoryId: 3,
    stock: 20,
  },
  {
    name: "COTTON LEGGING",
    price: 57,
    description:
      "The legging taking over your feed. Made with our iconic ribbed cotton that everyone craves, this ultra-soft and breathable style is the cutest, most comfortable legging you’ll ever wear. Features a smooth elastic waist with a SKIMS logo label at the center front and banded cuffs at the hem. Fits true to size. Pair with the Cotton Rib Tank or Plunge Bralette for the matching set.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/products/SKIMS-LOUNGEWEAR-AP-LEG-0039-CP-HEG_FR.jpg?v=1709237160&width=832",
    categoryId: 3,
    stock: 50,
  },
  {
    name: "CLASSIC JOGGER",
    price: 69,
    description:
      "The cloud-like, cotton sweatpants you love to lounge in, improved with side pockets lined in a soft, comfy jersey. These wear-everywhere bottoms feature an adjustable interior drawstring at the stretchy waist, side pockets, and an encased elastic hem. Fits true to size.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/BO-JOG-5207W-ONX-BC-SKIMS-LOUNGEWEAR_0001-FR.jpg?v=1707763975&width=832",
    categoryId: 3,
    stock: 30,
  },
  {
    name: "FOLDOVER BOOTCUT LEGGING",
    price: 70,
    description:
      "Be comfortable from brunch to beach stroll and beyond in this stretchy, full-length bottom. Features a boot cut and fold over waistband.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/BO-STR-3740-ONX-KB-SKIMS-LOUNGEWEAR_005-FR.jpg?v=1711501766&width=832",
    categoryId: 3,
    stock: 30,
  },
  {
    name: "FOLDOVER PANT",
    price: 64,
    description:
      "Your go-to pant for looking cute and feeling comfy. Our beloved lounge style features a comfortable folded waist that adds a feminine touch to your looks at home and on the go. Made with our signature soft, breathable jersey fabric that enhances your curves and comfort. Pair with a SKIMS Cotton Jersey tee or tank for a selfie-worthy set. Fits true to size.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/AP-PNT-0715-OYS-SC-SKIMS-LOUNGEWEAR_0001-FR.jpg?v=1721257945&width=832",
    categoryId: 3,
    stock: 21,
  },
  {
    name: "FRENCH TERRY JOGGER",
    price: 68,
    description:
      "Do-it-all in these everyday joggers. Effortlessly chic with a classic fit, these bottoms are made with soft, 100% organic cotton for unmatched, all-day comfort. Features an encased elastic hem and waist with an adjustable interior drawstring and side pockets. Fits true to size.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/BO-PNT-4904-OYS-AA-SKIMS-LOUNGEWEAR_0003-FR.jpg?v=1721259392&width=832",
    categoryId: 3,
    stock: 35,
  },
  {
    name: "COTTON RIB LEGGING",
    price: 56,
    description:
      "The legging taking over your feed. Made with our iconic ribbed cotton that everyone craves, this ultra-soft and breathable style is the cutest, most comfortable legging you’ll ever wear. Features a smooth elastic waist with a SKIMS logo label at the center front and banded cuffs at the hem. Fits true to size. Pair with the Cotton Rib Tank or Plunge Bralette for the matching set.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/AP-LEG-0039-OYS-TC-SKIMS-LOUNGEWEAR_0008-FR.jpg?v=1721258700&width=832",
    categoryId: 3,
    stock: 23,
  },
  {
    name: "LOW RISE PANT",
    price: 72,
    description:
      "The pants you’ll wear everywhere. With a sexy low rise and flared leg silhouette, you’ll sport this style 24/7 while out or at home. Made with soft, 100% organic cotton for all-day comfort. Features an elastic drawstring waist and a raw edge hem. Fits true to size.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/BO-PAN-6116W-OYS-AA-SKIMS-LOUNGEWEAR_0055-FR.jpg?v=1721259386&width=832",
    categoryId: 3,
    stock: 20,
  },
  {
    name: "KNIT STRAIGHT LEG PANT",
    price: 88,
    description:
      "Elevate your holiday lounge style with this chic, relaxed pant made of a stretchy boucle knit. The straight leg silhouette features an interior drawstring at the elastic waist for total comfort and ribbed details. Finish the Cozy look with the matching cropped top. Fits true to size.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/BO-STR-4045-ONX-FR-ZE-SKIMS-LOUNGEWEAR_016.jpg?v=1699319516&width=832",
    categoryId: 3,
    stock: 23,
  },
  {
    name: "MATERNITY PUMPING SCOOP BRALETTE",
    price: 38,
    description:
      "This ultra-soft, scoop neck bralette accommodates nursing women with multi-use front clasps and 2-ply construction. Leave the interior layer hooked for hands-free pumping. Features fully adjustable straps. Fits true to size.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/products/SKIMS-BRA-BR-SCP-2601-CH-ONX_0001_FR_8a071590-bcc9-47c5-8128-3dbce26f8ab9.jpg?v=1706832426&width=832",
    categoryId: 9,
    stock: 30,
  },
  {
    name: "MATERNITY HIGH-WAISTED LEGGING",
    price: 67,
    description:
      "A maternity must-have. This wear-everywhere style redefines comfort with our addictively soft, second skin fabric that stretches with your growing belly – without losing its shape. Features a 2-ply construction to prevent sheerness and a high-rise, elastic waist. Fits true to size.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/BO-LEG-4479-ONX-AE-SKIMS-LOUNGEWEAR_0006-FR.jpg?v=1706577778&width=832",
    categoryId: 9,
    stock: 30,
  },
  {
    name: "MATERNITY NURSING TANK",
    price: 50,
    description:
      "This scoop neck tank is made with our signature buttery-soft fabric that stretches to twice its size and has a 2-ply construction. Features clasps at the adjustable front straps to unhook for easy nursing and pumping. The built-in shelf bra with elastic at the underbust and additional side fabric provide extra comfort and support. Fits true to size.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/TP-TNK-4480-AE-ONX-SKIMS-LOUNGEWEAR_0004-FR.jpg?v=1717011317&width=832",
    categoryId: 9,
    stock: 20,
  },
  {
    name: "MATERNITY CATSUIT",
    price: 101,
    description:
      "This one-and-done piece goes with everything, including your bump. Slip into the buttery softness of this catsuit made with two layers of our best-selling Fits Everybody fabric designed to stretch with your growing belly for an ultra-flattering fit and second skin feel. Features a built-in shelf bra with smooth underbust elastic, a chic square neck, and tank straps. Fits true to size.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/OS-FUL-4386-ONX-AE-SKIMS-LOUNGEWEAR_0008-FR.jpg?v=1706577641&width=832",
    categoryId: 9,
    stock: 30,
  },
  {
    name: "MATERNITY LONG SLIP DRESS",
    price: 91,
    description:
      "Embrace your glow in this bump-boasting slip dress. Made with our buttery, curve-enhancing fabric, this full-length style comfortably stretches to your growing belly and never loses shape for the perfect fit every time. The built-in shelf bra with underbust elastic and 2-ply construction offers added support. Features a flattering scoop neck, adjustable cami straps, and a center back slit for comfort and ease. Fits true to size.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/DR-MAX-4387-ONX-AE-SKIMS-LOUNGEWEAR_0008-FR.jpg?v=1706577797&width=832",
    categoryId: 9,
    stock: 10,
  },
  {
    name: "MATERNITY BANDED HIGH-WAISTED BRIEF",
    price: 29,
    description:
      "A high-waist maternity brief with a soft, supportive elastic waistband and comfortable non-compressive core for your growing baby bump. Features a flexible foldover band for support, an 100% cotton gusset, and full brief back coverage. Fits true to size.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/products/SKIMS-PANTY-BRF-2602-CH-ONX_0003_FR_e2c87938-6ef2-400b-9e19-f780373de7b2.jpg?v=1679960367&width=832",
    categoryId: 9,
    stock: 30,
  },
  {
    name: "MATERNITY HIGH-WAISTED BRIEF",
    price: 28,
    description:
      "The best brief for you and your belly. This high-waisted panty is made with our five-star, buttery fabric that comfortably molds to your body and stretches to twice its size, allowing for a growing baby bump. Features a full, maximum coverage bottom and a cotton gusset. Fits true to size.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/PN-BRF-4381-ONX-AE-SKIMS-PANTY_0008-FR.jpg?v=1706577528&width=832",
    categoryId: 9,
    stock: 10,
  },
  {
    name: "MATERNITY HIGH-WAISTED THONG",
    price: 26,
    description:
      "The comfort you crave for your growing baby without the panty lines. Made with a single layer of our top-rated, buttery Fits Everybody fabric, this high-waisted thong stretches to twice its size to comfortably accommodate your growing baby bump without feeling constrictive. Features a cotton gusset. Fits true to size.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/TH-THG-5971W-JSP-AD-SKIMS-PANTY_0007-FR.jpg?v=1712949127&width=832",
    categoryId: 9,
    stock: 40,
  },
  {
    name: "MATERNITY HIGH-WAISTED BRIEF 2-PACK",
    price: 48,
    description:
      "Your belly’s perfect pair. This pack of maternity panties fits like a second skin for unparalleled pre- and post-natal comfort. Made with our signature fabric that feels like butter and stretches to twice its size to allow space for a growing baby bump. Features a high rise with medium coverage and a 100% cotton gusset. Fits true to size.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/SKIMS-PANTY-TH-THG-6066W-PAO_Composite.jpg?v=1722980350&width=832",
    categoryId: 9,
    stock: 20,
  },
  {
    name: "SHORT SLEEVE BUTTON UP SET",
    price: 71,
    description:
      "A match made in heaven. This incredibly smooth two-piece set features a classic button-up top with short sleeves, a chest pocket, and contrast piping details. The relaxed shorts include an adjustable interior drawstring for an ultra comfortable fit. Fits true to size.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/ST-SST-4758W-SKY-SA-SKIMS-LOUNGEWEAR_0004-FR.jpg?v=1722288912&width=832",
    categoryId: 6,
    stock: 20,
  },
  {
    name: "HENLEY TANK",
    price: 38,
    description:
      "Sleep comes easy in this fitted tank. Made with an ultra-soft and stretchy modal fabric, this lightweight style gives you the comfort of your dreams. Features a scoop neck with henley buttons and hits below the natural waist. Fits true to size.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/SL-TNK-6289W-SKY-SA-SKIMS-LOUNGEWEAR_0008-FR.jpg?v=1722288899&width=832",
    categoryId: 6,
    stock: 30,
  },
  {
    name: "SLEEP SHORT",
    price: 36,
    description:
      "Stay cool in this sweet sleep short. Made with our ultra-soft, stretchy fabric, this breathable style keeps you comfortable through the night. Features a flattering, slightly flared silhouette with an adjustable drawstring waist and a SKIMS label at the side seam. Complete the set with the Henley Tank. Fits true to size.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/BO-SHO-4759-ONX-SB-SKIMS-LOUNGEWEAR_0008-FR.jpg?v=1722288840&width=832",
    categoryId: 6,
    stock: 10,
  },
  {
    name: "LOOSE TANK",
    price: 38,
    description:
      "Sleep tight in this loose-fit tank. Made with our comfortable, super-soft modal fabric, this racerback top is the dreamiest addition to your pajama drawer. Features a chic scoop neck and skimpy coverage at the underarm. Detailed with a SKIMS logo label at the left side seam. Hits below the natural waist and fits true to size.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/TP-TNK-6279W-ONX-LC-SKIMS-LOUNGEWEAR_0014-FR.jpg?v=1713308544&width=832",
    categoryId: 6,
    stock: 30,
  },
  {
    name: "STRAIGHT LEG PANT",
    price: 46,
    description:
      "These unbelievably soft pajama bottoms will be your top choice when it comes to your sleep uniform. Designed with a straight leg silhouette, these relaxed pants have an adjustable interior drawstring at the waistband for ultimate comfort. Fits true to size.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/BO-STR-4085-SKY-SA-SKIMS-LOUNGEWEAR_0004-FR.jpg?v=1722288887&width=832",
    categoryId: 6,
    stock: 20,
  },
  {
    name: "BUTTON UP DRESS",
    price: 69,
    description:
      "Dress for the five-star sleep you deserve. This incredibly soft button-up is designed for all-night comfort with its breathable, stretchy fabric and slightly oversized fit. Features a classic shirttail hem and chic tonal piping details. Embroidered with the SKIMS logo at the chest pocket. Fits true to size.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/DR-MIN-4763-LHG-AA-SKIMS-LOUNGEWEAR_0003-FR.jpg?v=1708470676&width=832",
    categoryId: 6,
    stock: 30,
  },
  {
    name: "COTTON SLIP DRESS",
    price: 73,
    description:
      "Slip into something sexier from SKIMS. This vintage-inspired lounge mini is designed in a premium, softer version of our signature cotton jersey for curve-hugging, breathable comfort. Made extra special with lace trim at the triangle neck, underbust, and hem. Features a crochet lace SKIMS logo at the center front and elastic straps that adjust. Fits true to size.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/SL-MIN-3798-MBL-QA-SKIMS-DRESS_0003-FR.jpg?v=1717709252&width=832",
    categoryId: 6,
    stock: 25,
  },
  {
    name: "ROMANCE SLIP DRESS",
    price: 89,
    description:
      "The sweetest little thing. This mini dress is made for romance with its sheer silk fabric and delicate lace along the triangle neckline, underarm, bust, side seams, and hem. Detailed with a dainty rosette at the center front and a left side slit. Features continuous shoulder straps that tie in the back for an adjustable fit. Fits true to size.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/DS-DRS-6945W-SGM-RA-SKIMS-DRESS_0006-FR.jpg?v=1719589572&width=832",
    categoryId: 6,
    stock: 30,
  },
  {
    name: "BOYFRIEND BOXER",
    price: 28,
    description:
      "A classic boxer short made of super soft, lightweight stretch jersey. Features a tonal SKIMS logo on the soft elastic waistband and faux front fly stitching. Wear alone or as a matching set.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/products/SKIMS-UNDERWEAR-AP-BOX-0461-NC-ONX_FR.jpg?v=1644591490&width=832",
    categoryId: 4,
    stock: 30,
  },
  {
    name: "LOOSE SHORT",
    price: 42,
    description:
      "Your comfort zone is cuter in this lounge short. Made with our five-star modal rib fabric that’s soft enough to sleep in, this ultra-comfy, roomy style is a dream come true. Features a wide elastic waistband with a mid rise, an interior drawstring, and pockets at the side seam. Fits true to size.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/BO-SHO-5550W-ONX-NB-SKIMS-LOUNGEWEAR_0007-FR.jpg?v=1715635323&width=832",
    categoryId: 4,
    stock: 30,
  },
  {
    name: "CLASSIC SHORT",
    price: 48,
    description:
      "Get a perfectly laid-back look with these unbelievably soft classic fleece lounge shorts. Features an interior drawstring at the waist, side pockets, and a finished hem. Fits true to size.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/BO-SHO-4498-CND-TB-SKIMS-LOUNGEWEAR_0009-FR.jpg?v=1723571083&width=832",
    categoryId: 4,
    stock: 30,
  },
  {
    name: "LOOSE BOXER",
    price: 34,
    description:
      "A relaxed version of our signature boxer silhouette, now with an ultra-comfortable loose fit for top-tier lounging, sleep, and beyond. Features an elastic waistband with a front center SKIMS logo and button. Fits true to size.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/AP-BOX-2386-CND-TB-SKIMS-LOUNGEWEAR_0008-FR.jpg?v=1723570359&width=832",
    categoryId: 4,
    stock: 25,
  },
  {
    name: "COTTON CLASSIC SHORT",
    price: 36,
    description:
      "A perfect short with a sexy, curve-hugging fit, and designed with our Cotton Jersey fabric for a soft, breathable feel. Features a ribbed waistband with an exterior drawcord at the waist. Make it a set with the Cotton Jersey Split Neck Tank or Mock Neck T-Shirt. Fits true to size.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/BO-SHO-3231-SOT-SB-SKIMS-LOUNGEWEAR_0006-FR.jpg?v=1721258065&width=832",
    categoryId: 4,
    stock: 30,
  },
  {
    name: "COTTON TWISTED SHORT",
    price: 42,
    description:
      "The sexy shorts you’ve been looking for. This low-rise lounge short features a deep-V front and feminine ruched detail that enhances your waist. Made with our signature cotton jersey fabric with the perfect amount of stretch and comfort you’ll crave. Fits true to size.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/AP-SHO-0740-CCY-NC-SKIMS-LOUNGEWEAR_0004-FR.jpg?v=1715798935&width=832",
    categoryId: 4,
    stock: 26,
  },
  {
    name: "OVERSIZED SHORT",
    price: 52,
    description:
      "Keep cool and comfy in this off-duty short. This oversized style is soft as a cloud and extra roomy to boost comfort while relaxing or running errands. Features inseam pockets and a high, elastic waist with an interior drawstring for your perfect fit. Order your usual size for an oversized fit.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/BO-SHO-4002-ONX-NB-SKIMS-LOUNGEWEAR_0020-FR.jpg?v=1713894374&width=832",
    categoryId: 4,
    stock: 30,
  },
  {
    name: "ROMANCE SHORT",
    price: 48,
    description:
      "Short and sweet for your sexiest after hours. Sheer and 100% silk, this flirty style is made to make them stare. Features a romantic ruffled edge along the drawstring waist and tonal lace trim at the hem. Sits at the natural waist and fits true to size.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/BO-SHO-5916W-ONM-RB-SKIMS-LOUNGEWEAR_0003-FR.jpg?v=1719589525&width=832",
    categoryId: 4,
    stock: 20,
  },
  {
    name: "BIKE SHORT",
    price: 48,
    description:
      "Not your basic bike short.This made-to-show-off style has feminine lace legs and trim for a look that makes a statement when you step out. Offers incredible comfort with its buttery-soft fabric that stretches to your curves and never loses shape. Sits at the natural waist and hits at the mid-thigh. Fits true to size.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/BO-BXS-5379W-ONX-QB-SKIMS-LOUNGEWEAR_0008-FR.jpg?v=1716422854&width=832",
    categoryId: 4,
    stock: 30,
  },
  {
    name: "SOFT LOUNGE SHORT",
    price: 38,
    description:
      "Made of super soft, breathable modal ribbed fabric, the Soft Lounge Boxer feels silky against your skin, making it the perfect loungewear or sleepwear option. Features a wide waistband with tonal SKIMS logo for a classic, sport-inspired look.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/products/SKIMS-UNDERWEAR-PN-HWS-0257--LF-ONX_FR.jpg?v=1643233017&width=832",
    categoryId: 4,
    stock: 20,
  },
  {
    name: "OUTDOOR BIKE SHORT",
    price: 48,
    description:
      "Beat the heat in these flattering off-duty shorts. Features a high-rise fit, stretchy waistband, and hits at mid-thigh. Pair with the Outdoor Track Jacket and you’re all set. Fits true to size. This garment has undergone a special wash process which may result in variations in shading and color. ",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/BO-BKS-4186-ASH-HC-SKIMS-LOUNGEWEAR_0822-FR.jpg?v=1708711141&width=832",
    categoryId: 4,
    stock: 30,
  },
  {
    name: "COTTON LOOSE BOXER",
    price: 38,
    description:
      "Our most-tagged cotton, now in a boxer inspired by the boys. This lounge short is made with our ultra-soft, breathable ribbed fabric in a relaxed fit for comfort you’ll keep coming back to. Features an elastic waistband with the SKIMS logo at the center front. Fits true to size.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/BO-BOX-5520W-SOT-HC-SKIMS-LOUNGEWEAR_2918-FR.jpg?v=1709254897&width=832",
    categoryId: 4,
    stock: 30,
  },
  {
    name: "SOFT LOUNGE LOOSE SHORT",
    price: 42,
    description:
      "Your comfort zone is cuter in this lounge short. Made with our five-star modal rib fabric that’s soft enough to sleep in, this ultra-comfy, roomy style is a dream come true. Features a wide elastic waistband with a mid rise, an interior drawstring, and pockets at the side seam. Fits true to size.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/BO-SHO-5550W-ONX-NB-SKIMS-LOUNGEWEAR_0007-FR.jpg?v=1715635323&width=832",
    categoryId: 4,
    stock: 30,
  },
  {
    name: "DOLPHIN SHORT",
    price: 44,
    description:
      "A short you’ll sport on repeat. This low-rise style is made with our soft, 100% organic cotton for major comfort at home and beyond. Features an elastic waistband with an exterior drawstring to adjust the fit and a raw edge hem. Fits true to size.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/SH-SHO-6118W-IRO-AA-SKIMS-LOUNGEWEAR_0018-FR.jpg?v=1721259565&width=832",
    categoryId: 4,
    stock: 50,
  },
  {
    name: "COTTON JERSEY",
    price: 20,
    description:
      "Our viral t-shirt in the cotton everyone craves. This perfect five-star tee is made with our stretchy, lightweight cotton that enhances your curves with its body-hugging fit and elevates your comfort with its incredibly soft feel. Features stitching details along the short sleeves and hem and hits below the natural waist. Fits true to size.",
    image: "https://skims.com/products/cotton-jersey-t-shirt-soot",
    categoryId: 1,
    stock: 10,
  },
  {
    name: "BOYFRIEND",
    price: 25,
    description:
      "This super soft stretch jersey lounge top is inspired by your boyfriend’s favorite t-shirt and meant to be worn oversized. Perfect for all day, every day wear. Intentionally oversized, with unisex appeal.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/products/SKIMS-LOUNGEWEAR-AP-TSH-0462-NC-ONX_FR.jpg?v=1644349799&width=832",
    categoryId: 1,
    stock: 20,
  },
  {
    name: "RELAXED TEE",
    price: 18,
    description:
      "Your go-to tee. Made with a soft, breathable cotton blend in a comfortable, classic fit. Features ribbed detailing at the crew neck and a SKIMS logo label at the center back of the collar. Hits below the natural waist. Fits true to size.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/SS-STT-6975W-SNO-SB-SKIMS-LOUNGEWEAR_0009-FR.jpg?v=1722531667&width=832",
    categoryId: 1,
    stock: 8,
  },
  {
    name: "OVERSIZED CROPPED",
    price: 29,
    description:
      "The crop top your closet needs. Made for all-day, everyday comfort, this oversized tee is super soft and breathable. Features short sleeves with a dropped shoulder and a ribbed crew neck with a SKIMS logo label at the back. Hits above the natural waist and fits true to size.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/SS-STT-6110W-SNO-SB-SKIMS-LOUNGEWEAR_0009-FR.jpg?v=1721841359&width=832",
    categoryId: 1,
    stock: 10,
  },
  {
    name: "COTTON RIB",
    price: 38,
    description:
      "A classic everyday crewneck tee with a fitted silhouette. Made with our soft and breathable ribbed cotton fabric.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/SKIMS-LOUNGEWEAR-AP-TSH-0815-RB-LHG_0006_FR_1.jpg?v=1717542558&width=832",
    categoryId: 1,
    stock: 15,
  },
  {
    name: "CROPPED RAGLAN",
    price: 40,
    description:
      "Everyone needs a good Raglan—and your hunt ends with this vintage-inspired, worn-in look. Pair this classic top with your favorite denim jeans for an effortless outfit. Fits true to size. This garment has undergone a special wash process which may result in variations in shading and color. These variations are intentional and add to the unique characteristics of this garment. The coloring may rub off on light colored fabrics and upholstery. Wash before wear, and wash garment separately until no further color is released.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/AP-TSH-1367-ZNC-SC-SKIMS-LOUNGEWEAR_0003-FR.jpg?v=1721261499&width=832",
    categoryId: 1,
    stock: 5,
  },
  {
    name: "SEAMLESS MODAL",
    price: 42,
    description:
      "The hottest crop in your closet. This short sleeve top is made with a super lightweight, ultra-stretchy fabric for curve-hugging comfort from the couch to the coffee shop. Features a classic crew neck and tonal, seamless edges. Wear with the Flare Legging for the perfect off-duty look. Fits true to size.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/TP-TSH-3723-MNM-OC-SKIMS-LOUNGEWEAR_0001-FR.jpg?v=1716940604&width=832",
    categoryId: 1,
    stock: 15,
  },
  {
    name: "COTTON TWIST",
    price: 30,
    description:
      "Put a sexy twist on your lounge looks. This curve-hugging crop top has a chic, asymmetrical silhouette and sexy twist details at the shoulder and side. Made with our ultra-soft and stretchy cotton jersey for five-star comfort you’ll crave. Wear with the coordinating Foldover Skirt to finish the ‘fit. Fits true to size.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/TP-TNK-5579W-MBL-NB-SKIMS-LOUNGEWEAR_0005-FR.jpg?v=1715798665&width=832",
    categoryId: 1,
    stock: 10,
  },
  {
    name: "BOYFRIEND - LONG SLEEVE",
    price: 45,
    description:
      "The perfect borrowed from the boys long sleeve t-shirt to wear for relaxed comfort as loungewear or sleepwear. Intentionally oversized, with unisex appeal.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/products/SKIMS-LOUNGEWEAR-AP-LGS-0585-NC-ONX_FR.jpg?v=1644350044&width=832",
    categoryId: 1,
    stock: 8,
  },
  {
    name: "CROPPED LONG SLEEVE",
    price: 50,
    description:
      "Added coverage that looks good and feels even better. Non-constrictive, this body-hugging Long Sleeve Tee can be worn all on its own and paired with your favorite bottoms. Fits true to size.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/AP-LGS-1370-ZNC-SC-SKIMS-LOUNGEWEAR_0004-FR.jpg?v=1721261491&width=832",
    categoryId: 1,
    stock: 10,
  },
  {
    name: "RELAXED LONG SLEEVE",
    price: 44,
    description:
      "You just found your favorite tee. This wardrobe staple is ultra-comfy with its soft, breathable feel and classic fit. Features a ribbed crew neck and a SKIMS logo label at the back collar. Hits below the natural waist. Fits true to size.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/LS-LST-6976W-SNO-SB-SKIMS-LOUNGEWEAR_0005-FR.jpg?v=1721841363&width=832",
    categoryId: 1,
    stock: 30,
  },
  {
    name: "CARDIGAN",
    price: 63,
    description:
      "The cardigan you can’t stop wearing. Perfect for wearing layered or alone, this long sleeve button-up features a sultry deep-v neck and a fitted silhouette. Made with our soft, slinky fabric that effortlessly hugs your body. Hits below the natural waist and fits true to size.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/LS-LST-6742W-ONX-RB-SKIMS-LOUNGEWEAR_0022-FR.jpg?v=1719431480&width=832",
    categoryId: 1,
    stock: 10,
  },
  {
    name: "TURTLENECK TOP",
    price: 65,
    description:
      "This single-layered turtleneck lightly smooths and feels like a second skin. Wear it alone or as a base layer for unmatched comfort and easy styling. Fits true to size.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/products/SKIMS-LOUNGEWEAR-AP-TTN-1985-RA-COA_004.jpg?v=1691627038&width=832",
    categoryId: 1,
    stock: 20,
  },
  {
    name: "FITS EVERYBODY T-SHIRT",
    price: 35,
    description:
      "We perfected the t-shirt. Made with our signature buttery-soft fabric with incredible stretch and a second-skin feel, this versatile tee molds to your body for the most flattering fit whether you’re dressing it up or down. Features a classic crew neck and short sleeves. Fits true to size.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/products/SKIMS-LOUNGEWEAR-AP-TSH-0649-CJ-ONX_FR.jpg?v=1621643158&width=832",
    categoryId: 1,
    stock: 25,
  },
  {
    name: "SOFT LOUNGE",
    price: 35,
    description:
      "This flattering, ribbed cropped t-shirt keeps you comfortable and cool while lounging and beyond. Features a crew neckline. Pair with coordinating Soft Lounge bottom. Fits true to size.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/TP-CRP-4224-ONX-HC-SKIMS-LOUNGEWEAR_1099-FR_98107422-caba-47b2-900d-3091d6689733.jpg?v=1708546564&width=832",
    categoryId: 1,
    stock: 10,
  },
  {
    name: "COTTON RIB LONG SLEEVE",
    price: 54,
    description:
      "Complement every curve in this stretchy, ultra-flattering long sleeve tee. Made with our selfie-worthy ribbed cotton, this breathable shirt is comfortable for everyday wear. Style alone or as a layering piece. Fits true to size.",
    image:
      "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/TP-LST-4689-SOT-XC-SKIMS-LOUNGEWEAR_0004_FR.jpg?v=1697162812&width=832",
    categoryId: 1,
    stock: 10,
  },
];

export const preLoadProducts = async () => {
  const products = await ProductRepository.find();
  if (!products.length)
    await AppDataSource.createQueryBuilder()
      .insert()
      .into(Product)
      .values(productsToPreLoad)
      .execute();
  console.log("Products preloaded");
};
