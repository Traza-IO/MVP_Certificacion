import Text "mo:base/Text";
import Trie "mo:base/Trie";
import Types "types";

actor class Product() {

  // Alias interno para clave de texto
  type Key<K> = Trie.Key<K>;
  func key(t : Text) : Key<Text> = {
    hash = Text.hash t;
    key = t;
  };

  // ---------- MODELOS DPP ----------

  private stable var modelsDpp : Trie.Trie<Text, Types.ModelDpp> = Trie.empty();

  public func createModel(model : Types.ModelDpp) : async Text {
    modelsDpp := Trie.replace(
      modelsDpp,
      key(model.idModel),
      Text.equal,
      ?model
    ).0;
    return model.idModel;
  };

  public query func readModelById(idModel : Text) : async ?Types.ModelDpp {
    Trie.find(modelsDpp, key(idModel), Text.equal)
  };

  // ---------- LOTES DPP ----------

  private stable var lotsDpp : Trie.Trie<Text, Types.LotDpp> = Trie.empty();

  public func createLot(lot : Types.LotDpp) : async Text {
    lotsDpp := Trie.replace(
      lotsDpp,
      key(lot.idLot),
      Text.equal,
      ?lot
    ).0;
    return lot.idLot;
  };

  public query func readLotById(idLot : Text) : async ?Types.LotDpp {
    Trie.find(lotsDpp, key(idLot), Text.equal)
  };

  // ---------- PRODUCTOS DPP ----------

  private stable var productsDpp : Trie.Trie<Text, Types.ProductDpp> = Trie.empty();

  public func createProduct(product : Types.ProductDpp) : async Text {
    productsDpp := Trie.replace(
      productsDpp,
      key(product.idProduct),
      Text.equal,
      ?product
    ).0;
    return product.idProduct;
  };

  public query func readProductById(idProduct : Text) : async ?Types.ProductDpp {
    Trie.find(productsDpp, key(idProduct), Text.equal)
  };
};
