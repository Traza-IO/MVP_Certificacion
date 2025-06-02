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

  // ---------- log DPP ----------

  private stable var traceabilityDPP : Trie.Trie<Text, Types.traceability_consolidate> = Trie.empty();

  public func createUnitData(unit : Types.traceability_consolidate) : async Text {
    traceabilityDPP := Trie.replace(
      traceabilityDPP,
      key(unit.gtin_product),
      Text.equal,
      ?unit
    ).0;
    return  unit.gtin_product;
  };

  public query func readModelById(gtinProduct : Text) : async ?Types.traceability_consolidate {
    Trie.find(traceabilityDPP, key(gtinProduct), Text.equal)
  };

  // ---------- LOTES DPP ----------

  
};
