// Configuration de la carte Edy's Diner
// source : 'local' (démo navigateur) | 'sheets' (Google Sheets) | 'supabase' (panneau admin)
window.CONFIG = {
  source: "supabase",

  // Option Google Sheets : colle ici l'URL "Publier sur le web > CSV"
  // Fichier > Partager > Publier sur le web > onglet CSV > copier le lien
  sheetsUrl: "",

  // Option Supabase : URL du projet + clé (Settings > API Keys)
  // loginDomain : suffixe ajouté quand le patron tape un identifiant simple
  // (ex : "patron" -> patron@edys-diner.fr). Un email complet est aussi accepté.
  supabase: {
    url: "https://acgvzszryglezkwzfpka.supabase.co",
    anonKey: "sb_publishable_LNhfUCOf5ZPPY-1ZlVCEyQ_Ez4qLTIx",
    loginDomain: "edys-diner.fr"
  }
};
