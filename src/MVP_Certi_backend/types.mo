import Time "mo:base/Time";

module {
  public type Timestamp = Time.Time;

  public type ModelDescription = {
    name : Text;
    collection : Text;
    summary : Text;
  };

  public type Materials = {
    composition : Text;
    recycling : Text;
    percentageRecycling : Text;
    recyclingIncome : Text;
  };

  public type Packing = {
    descriptionType : Text;
    weight : Text;
    volume : Text;
    recycling : Text;
    percentageRecycling : Text;
  };

  public type Care = {
    care : [Text];
    description : Text;
  };

  public type Tip = {
    description : Text;
    list : [Text];
  };

  public type ModelDpp = {
    idModel : Text;
    idModelExport : Text;
    summaryMaterials : Text;
    nameModel : Text;
    brandInformation : Text;
    descriptionHeader : Text;
    descriptionModel : ModelDescription;
    materials : Materials;
    packing : Packing;
    care : Care;
    tips : [Tip];
    state : Text;
    userCreated : Text;
    creationDate : Timestamp;
    updateDate : Timestamp;
  };

  public type ModelDppAux = {
    idModel : Text;
    idModelExport : Text;
    summaryMaterials : Text;
    nameModel : Text;
    brandInformation : Text;
    descriptionModel : Text;
    materials : Text;
    packing : Text;
    care : Text;
    tips : Text;
    state : Text;
    userCreated : Text;
    creationDate : Timestamp;
    updateDate : Timestamp;
  };

  public type TraceSupplier = {
    title : Text;
    ruc : Text;
    location : Text;
    coords : Text;
  };

  public type TraceabilityTimeline = {
    process : Text;
    startTime : Text;
    endTime : Text;
    owner : Text;
  };

  public type TraceabilityLot = {
    location : Text;
    timeline : [TraceabilityTimeline];
  };

  public type Certification = {
    name : Text;
    organization : Text;
    number : Text;
    auditDate : Text;
    effectiveDate : Text;
    link : Text;
    logo : Text;
  };

  public type ComplianceSupplier = {
    supplier : Text;
    certifications : [Certification];
  };

  public type ComplianceProcess = {
    process : Text;
    certifications : [Certification];
  };

  public type BlockchainTimelineEntry = {
    process : Text;
    hash : Text;
  };

  public type BlockchainTraceabilityLot = {
    timeline : [BlockchainTimelineEntry];
  };

  public type LotDpp = {
    idLot : Text;
    idModel : Text;
    lotNumber : Text;
    description : Text;
    traceSuppliers : [TraceSupplier];
    traceability : TraceabilityLot;
    complianceSuppliers : [ComplianceSupplier];
    complianceProcess : ComplianceProcess;
    blockchainTraceability : BlockchainTraceabilityLot;
    state : Text;
    userCreated : Text;
    creationDate : Timestamp;
    updateDate : Timestamp;
  };

  public type ProductPhotos = {
    front : Text;
    left : Text;
    back : Text;
    right : Text;
  };

  public type ProductInfo = {
    name : Text;
    brand : Text;
    gtin : Text;
    productCode : Text;
    productCodeEU : Text;
    category : Text;
    size : Text;
    color : Text;
    year : Text;
    season : Text;
  };

  public type ProductTimeline = {
    process : Text;
    startTime : Text;
    endTime : Text;
    owner : Text;
  };

  public type ProductTraceability = {
    timeline : [ProductTimeline];
  };

  public type BlockchainProductTimelineEntry = {
    process : Text;
    hash : Text;
  };

  public type BlockchainProductTraceability = {
    timeline : [BlockchainProductTimelineEntry];
  };

  public type ProductDpp = {
    idProduct : Text;
    idLot : Text;
    gtinProduct : Text;
    idProductParentCompany : Text;
    idProductSystemEU : Text;
    photo : ProductPhotos;
    information : ProductInfo;
    traceability : ProductTraceability;
    blockchainTraceability : BlockchainProductTraceability;
    state : Text;
    userCreated : Text;
    creationDate : Timestamp;
    updateDate : Timestamp;
  };


  public type TraceabilityConsolidate = {
    idModel: Text;
    idModelExport: Text;
    summaryMaterials: Text;
    nameModel:Text;
    brandInformation: [Text];
    descriptionHeader: Text;
    descriptionModel: {
      name: Text;
      collection: Text;
      summary: Text;
    };
    materials:{
      composition: Text;
      recycling: Text;
      percentageRecycling: Text;
      recyclingIncome: Text;
    };
    packing:{
      packType: Text;
      weight: Text;
      volume: Text;
      recycling: Text;
      percentageRecycling: Text;
    };
    care:{
      care:[Text];
      description: Text;
    };
    idLot: Text;
    lotNumberProduct: Text;
    traceSupplier:[
      {
        title: Text;
        ruc: Text;
        location: Text;
        coords: Text;
      }
    ];
    traceabilityBatch:{
      location: Text;
      timeLine:[{
        process: Text;
        startTime: Text;
        endTime: Text;
        owner: Text;
      }]
    };
    complianceSupplier:[
      {
      supplier: Text;
      certifications:[
        {
          name: Text;
          organization: Text;
          number: Text;
          auditDate: Text;
          effectiveDate: Text;
          link: Text;
          logo: Text;
        }
      ]
    }]
  }
};
