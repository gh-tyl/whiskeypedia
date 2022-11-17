class productClass {
  pId;
  pName;
  price;
  country;
  type;
  image_path01;
  image_path02;
  image_path03;
  pClass;
  super_cluster;
  cluster;
  meta_critic;
  stdev;
  reviewers_num;

  constructor(
    pId,
    pName,
    price,
    country,
    type,
    image_path01,
    image_path02,
    image_path03,
    pClass,
    super_cluster,
    cluster,
    meta_critic,
    stdev,
    reviewers_num
  ) {
    this.pId = pId;
    this.pName = pName;
    this.price = price;
    this.country = country;
    this.type = type;
    this.image_path01 = image_path01;
    this.image_path02 = image_path02;
    this.image_path03 = image_path03;
    this.pClass = pClass;
    this.super_cluster = super_cluster;
    this.cluster = cluster;
    this.meta_critic = meta_critic;
    this.stdev = stdev;
    this.reviewers_num = reviewers_num;
  }
}

export default productClass;
