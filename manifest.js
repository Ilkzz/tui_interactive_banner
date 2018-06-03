FT.manifest({
	"filename":"index.html",
	"width":320,
	"height":480,
	"clickTagCount":1,
	"hideBrowsers":["ie8"],
	"instantAds":[
		{"name":"sunset_text", "type":"text", "default":"Get lost in breathtaking views..."}, 
		{"name":"massage_text", "type":"text", "default":"in a relaxing couples massage..."},
		{"name":"candle_text", "type":"text", "default":"in a romantic meal for two."},
		{"name":"video_text", "type":"text", "default":"Get lost together on a holiday that brings you closer."},
		{"name":"endFrame_title", "type":"text", "default":"A HOLIDAY THAT BRINGS<br/>YOU CLOSER."},
		{"name":"endFrame_text", "type":"text", "default":"Discover a cruise now with <span id='price'>£100</span> off per booking.<br/>Book by 3rd October.*"},
		{"name":"cta", "type":"text", "default":"FIND OUT MORE <span id='arrow'>r</span>"},
		{"name":"tc", "type":"text", "default":"*Ts &Cs apply"},
		{"name":"clickThrough", "type":"text", "default":"http://www.thomson.co.uk"}
	],
    "trackingEvents": [
        {"name": "viewSceneInteract", "type": "standard"},
        {"name": "viewSceneAutoplay", "type": "standard"},
        {"name": "massageSceneInteract", "type": "standard"},
        {"name": "massageSceneAutoplay", "type": "standard"},
        {"name": "candleSceneInteract", "type": "standard"},
        {"name": "candleSceneAutoplay", "type": "standard"},
        {"name": "videoSceneDisplayed", "type": "standard"},
        {"name": "endFrameDisplayed", "type": "standard"}
    ]
});