var imgList = [
	{img:"gallery\\WMPA_MigrationPath_Irri.png",            comment:"Irri"},
	{img:"gallery\\WARC_FetidGlen_YSHM.png", 				comment:"YSHM"},
	{img:"gallery\\WDSR_DecayingTunnels_Ravenmind.png",		comment:"Ravenmind"},
	{img:"gallery\\WHIR_CorruptedFactories_Sparkbreeze.png",comment:"Sparkbreeze"},
	{img:"gallery\\WARG_TheSurface_AngleSmudge.png",		comment:"AngleSmudge"},
	{img:"gallery\\WAUA_AncientUrban_Ravenmind.png",		comment:"Ravenmind"},
	{img:"gallery\\WRRA_RustedWrecks_Ravenmind.png",		comment:"Ravenmind"},
	{img:"gallery\\WSSR_UnfortunateEvolution_Ravenmind.png",comment:"Ravenmind"},
	{img:"gallery\\WSKB_SunbakedAlley_Cas.png",				comment:"Cas"},
	{img:"gallery\\WARA_ShatteredTerrace_Astroik.png",		comment:"Astroik"},
	{img:"gallery\\WARD_ColdStorage_Irri.png",              comment:"Irri"},
	{img:"gallery\\WORA_OuterRim_Opsiian.png",    			comment:"Opsiian"},
	{img:"gallery\\WSKD_ShroudedStacks_Sparkbreeze.png",    comment:"Sparkbreeze"},
	{img:"gallery\\WSKA_TorrentialRailways_Alkali&Irri.png",comment:"Alkali & Irri"},
	{img:"gallery\\WPTA_SignalSpires_YSHM.png", 			comment:"YSHM"},
	{img:"gallery\\WRFB_TurbulentPump_Astroik.png", 		comment:"Astroik"},
	{img:"gallery\\WARE_HeatDucts_RiverTheGremlin.png",		comment:"RiverTheGremlin"},
	{img:"gallery\\WARF_AetherRidge_Cas.png",				comment:"Cas"},
	{img:"gallery\\WBLA_Badlands_Irri.png",                 comment:"Irri"},
	{img:"gallery\\WRFA_CoralCaves_Fishnoid.png",           comment:"Fishnoid"},
    {img:"gallery\\WARB_Salination_Irri.png",               comment:"Irri"},
    {img:"gallery\\WSKC_StormyCoast_NOTOCORDA.png",         comment:"NOTOCORDA"},
    {img:"gallery\\WTDA_TorridDesert_headintheklouds.png",  comment:"headintheklouds"},
];
var index = 0;

document.addEventListener("DOMContentLoaded", (e) => {
    index = Math.floor(Math.random() * imgList.length);

    document.getElementById("main").addEventListener("animationiteration", fadeOut);
    fadeOut();
});

function fadeOut() {
    index++;
    while (index >= imgList.length) index -= imgList.length;
    document.getElementById("static").src = imgList[index].img;
    document.getElementById("static-label").innerHTML = imgList[index].comment;
    setTimeout(() => {
        document.getElementById("fade").src = imgList[index].img;
        document.getElementById("fade-label").innerHTML = imgList[index].comment;
    }, 2000);
}
