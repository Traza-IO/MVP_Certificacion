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

  private stable var traceabilityDPP : Trie.Trie<Text, Types.TraceabilityConsolidate> = Trie.empty();

  public func createModel(model : Types.TraceabilityConsolidate) : async Text {
    traceabilityDPP := Trie.replace(
      traceabilityDPP,
      key(model.idModel),
      Text.equal,
      ?model
    ).0;
    return model.idModel;
  };

  public query func readModelById(gtinProduct : Text) : async ?Types.TraceabilityConsolidate {
    Trie.find(traceabilityDPP, key(gtinProduct), Text.equal)
  };

  // ---------- LOTES DPP ----------

  
};
