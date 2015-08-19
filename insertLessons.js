// We are inserting lessons into the mongoose database

var mongoose = require('mongoose');


var Lesson = require('./models/lesson');

// mongoose.connect('mongodb://localhost/Iching');
 mongoose.connect(process.env.MONGOLAB_URI ||'mongodb://localhost/Iching');

var hexLesson = [ 
      {
            code     : "111111", 
            lesson   : "1. Force (乾 qián); The Creative; Possessing Creative Power & Skill <br> <br> If you are alert to the creative, <br> you will meet with good fortune now.",
            imageUrl : '/images/hexagram01.png'
      },
      {
            code     : "000000", 
            lesson   : "2. Field (坤 kūn); The Receptive; Needing Knowledge & Skill; Do not force matters and go with the  flow <br> <br> Bear with change as the earth bears with us: <br> by yieldiing, by accepting, by nourishing.",
            imageUrl : '/images/hexagram02.png'

      },
      {
            code     : "100010", 
            lesson   : "3. Sprouting (屯 zhūn); Difficulty at the Beginning; Sprouting <br> <br> If we persevere a great success is at hand.",
            imageUrl : '/images/hexagram03.png'

      },
      {
            code     : "010001", 
            lesson   : "4. Enveloping (蒙 méng); Youthful Folly; Detained, Enveloped and Inexperienced <br> <br> Even the foolish can attain wisdom <br> by modestly following the Sage.",
            imageUrl : '/images/hexagram04.png'
      },
      {
            code     : "111010", 
            lesson   : "5. Attending (需 xū); Waiting; Uninvolvement (Wait for now), Nourishment <br> <br> To wait with a proper attidude <br> invites the assistance fo the Higher Power.",
            imageUrl : '/images/hexagram05.png'
      },
      {
            code     : "010111", 
            lesson   : "6. Arguing (訟 sòng); Conflict; Engagement in Conflict <br> <br> The proper response to conflict, <br> whether it lies within or without us, is disengagement.",
            imageUrl : '/images/hexagram06.png'
      },
      {
            code     : "010000", 
            lesson   : "7. Leading (師 shī); The Army; Bringing Together, Teamwork <br> <br> In times of war it is desirable <br> to be led by a cautious and humane general.",
            imageUrl : '/images/hexagram07.png'
      },
      {
            code     : "000010", 
            lesson   : "8. Grouping (比 bǐ); Holding Together; Union <br> <br> Seek union with others and with the Sage.",
            imageUrl : '/images/hexagram08.png'
      },
      {
            code     : "111011", 
            lesson   : "9. Small Accumulating (小畜 xiǎo chù); Small Taming; Accumulating Resources <br> <br> You are temporarily restrained. <br> It is a time for taking small steps.",
            imageUrl : '/images/hexagram09.png'
      },
      {
            code     : "110111", 
            lesson   : "10. Treading (履 lǚ); Treading (Conduct); Continuing with Alertness <br> <br> Lasting progress is won <br> through quiet self-discipline.",
            imageUrl : '/images/hexagram10.png'
      },
      {
            code     : "111000", 
            lesson   : "11. Pervading (泰 tài); Peace; Pervading <br> <br> Heaven exists on earth for those who <br> maintain correct thoughts and actions.",
            imageUrl : '/images/hexagram11.png'
      },
      {
            code     : "000111", 
            lesson   : "12. Obstruction (否 pǐ); Standstill; Stagnation <br> <br> In times of stagnation, attend to your attitude.",
            imageUrl : '/images/hexagram12.png'
      },
      {
            code     : "101111", 
            lesson   : "13. Concording People (同人 tóng rén); Fellowship; Fellowship, Partnership <br> <br> In fellowship with others, <br> Embody the principles of the Sage.",
            imageUrl : '/images/hexagram13.png'
      },
      {
            code     : "111101", 
            lesson   : "14. Great Possessing (大有 dà yǒu); Great Possession; Independence, Freedom <br> <br> Those who are steadfastly balanced, humble, <br> and in harmony with the Sage inherit <br> everything under the sun.",
            imageUrl : '/images/hexagram14.png'
      },
      {
            code     : "001000", 
            lesson   : "15. Humbling (謙 qiān); Modesty; Being Reserved, Refraining <br> <br> The Creative acts to empty what is full <br> and to offer abundance to what is modest.",
            imageUrl : '/images/hexagram15.png'
      },
      {
            code     : "000100", 
            lesson   : "16. Providing-For (豫 yù); Enthusiasm; Inducement, New Stimulus <br> <br> Proper enthusiasm opens every door.",
            imageUrl : '/images/hexagram16.png'
      },
      {
            code     : "100110", 
            lesson   : "17. Following (隨 suí); Following; Following <br> <br> Do not argue with what is; <br> simply follow the progress of truth.",
            imageUrl : '/images/hexagram17.png'
      },
      {
            code     : "011001", 
            lesson   : "18. Corrupting (蠱 gǔ); Work on the Decayed; Repairing <br> <br> A challenge to improvement: <br> that which has been spoiled through neglect <br> can be rejuvinated through effort.",
            imageUrl : '/images/hexagram18.png'
      },
      {
            code     : "110000", 
            lesson   : "19. Nearing (臨 lín); Approach; Approaching Goal, Arriving <br> <br> Good approaches the superior person.",
            imageUrl : '/images/hexagram19.png'
      },
      {
            code     : "000011", 
            lesson   : "20. Viewing (觀 guān); Contemplation; The Withholding <br> <br> By concentrating on the higher laws <br> you acquire the power that underlies them.",
            imageUrl : '/images/hexagram20.png'
      },
      {
            code     : "100101", 
            lesson   : "21. Gnawing Bite (噬嗑 shì kè); Biting Through; Deciding <br> <br> There is an obstacle to the expression of truth. <br> Withdrawal into quietness allows the Sage to moderate.",
            imageUrl : '/images/hexagram21.png'
      },
      {
            code     : "101001", 
            lesson   : "22. Adorning (賁 bì); Grace; Embellishing <br> <br> Inside, the strength of simplicity and self-knowledge. <br> Outside, the beauty of acceptance and gentleness.",
            imageUrl : '/images/hexagram22.png'
      },
      {
            code     : "000001", 
            lesson   : "23. Stripping (剝 bō); Splitting Apart; Stripping, Flaying <br> <br>  Do not attempt to intervene now.",
            imageUrl : '/images/hexagram23.png'
      },
      {
            code     : "100000", 
            lesson   : "24. Returning (復 fù); Return; Returning <br> <br> A time of darkness comes to a close.",
            imageUrl : '/images/hexagram24.png'
      },
      {
            code     : "100111", 
            lesson   : "25. Without Embroiling (無妄 wú wàng); Innocence; Without Rashness <br> <br> All good comes when we are innocent.",
            imageUrl : '/images/hexagram25.png'
      },
      {
            code     : "111001", 
            lesson   : "26. Great Accumulating (大畜 dà chù); Great Taming; Accumulating Wisdom <br> <br> In the face of rising tension, keep still. <br> Honor in practice what you have learned from the I Ching.",
            imageUrl : '/images/hexagram26.png'
      },
      {
            code     : "100001", 
            lesson   : "27. Swallowing (頤 yí); Mouth Corners; Seeking Nourishment <br> <br> Give proper nourishment to yourself and others.",
            imageUrl : '/images/hexagram27.png'
      },
      {
            code     : "011110", 
            lesson   : "28. Great Exceeding (大過 dà guò); Great Preponderance; Great Surpassing <br> <br> There are great pressures at work. <br> By meeting them with modesty and patience, <br> you avoid misfortune and meet with success.",
            imageUrl : '/images/hexagram28.png'
      },
      {
            code     : "010010", 
            lesson   : "29. Gorge (坎 kǎn); The Abysmal Water; Darkness, Gorge <br> <br> Flow like pure water <br> through difficult situations.",
            imageUrl : '/images/hexagram29.png'
      },
      {
            code     : "101101", 
            lesson   : "30. Radiance (離 lí); The Clinging; Clinging, Attachment <br> <br> Cling to the power of higher truth.",
            imageUrl : '/images/hexagram30.png'
      },
      {
            code     : "001110", 
            lesson   : "31. Conjoining (咸 xián); Influence; Attraction <br> <br> An influence comes <br> Good fortune to those whose hearts are correct.",
            imageUrl : '/images/hexagram31.png'
      },
      {
            code     : "011100", 
            lesson   : "32. Persevering (恆 héng); Duration; Perseverance <br> <br> Remain steady and allow <br> the world to shape itself.",
            imageUrl : '/images/hexagram32.png'
      },
      {
            code     : "001111", 
            lesson   : "33. Retiring (遯 dùn); Retreat; Withdrawing <br> <br> This is a time for disengagement and retreat. <br> In stillness you are out of the reach of danger.",
            imageUrl : '/images/hexagram33.png'
      },
      {
            code     : "111100", 
            lesson   : "34. Great Invigorating (大壯 dà zhuàng); Great Power; Great Boldness <br> <br> To achieve true power and true greatness <br> one must be in harmony with what is right.",
            imageUrl : '/images/hexagram34.png'
      },
      {
            code     : "000101", 
            lesson   : "35. Prospering (晉 jìn); Progress; Expansion, Promotion <br> <br> You progress like the rising sun. <br> The brighter your virtue, the higher you rise.",
            imageUrl : '/images/hexagram35.png'
      },
      {
            code     : "101000", 
            lesson   : "36. Brightness Hiding (明夷 míng yí); Darkening of the Light; Brilliance Injured <br> <br> Darkness reigns in the external world now. <br> Disengage from negative feelings and <br> maintain your inner light.",
            imageUrl : '/images/hexagram36.png'
      },
      {
            code     : "101011", 
            lesson   : "37. Dwelling People (家人 jiā rén); The Family; Family <br> <br> A healthy family, a healthy country, <br> a healthy world--all grow outward <br> from a single superior person.",
            imageUrl : '/images/hexagram37.png'
      },
      {
            code     : "110101", 
            lesson   : "38. Polarising (睽 kuí); Opposition; Division, Divergence <br> <br> Misunderstanding truth creates opposition.",
            imageUrl : '/images/hexagram38.png'
      },
      {
            code     : "001010", 
            lesson   : "39. Limping (蹇 jiǎn); Obstruction; Halting, Hardship <br> <br> Surrounded by obstructions, one must first <br> retreat, then seek the direction of the Sage.",
            imageUrl : '/images/hexagram39.png'
      },
      {
            code     : "010100", 
            lesson   : "40. Taking-Apart (解 xiè); Deliverance; Liberation, Solution <br> <br> A change in attitude <br> delivers you from difficulties.",
            imageUrl : '/images/hexagram40.png'
      },
      {
            code     : "110001", 
            lesson   : "41. Diminishing (損 sǔn); Decrease; Decrease <br> <br> Be still, lessen the power of the <br> ego, and misfortune will be avoided.",
            imageUrl : '/images/hexagram41.png'
      },
      {
            code     : "100011", 
            lesson   : "42. Augmenting (益 yì); Increase; Increase <br> <br> Powerful improvements are underway.",
            imageUrl : '/images/hexagram42.png'
      },
      {
            code     : "111110", 
            lesson   : "43. Parting (夬 guài); Breakthrough; Separation <br> <br> A breakthrough.  Do not be drawn back into bad habits.",
            imageUrl : '/images/hexagram43.png'
      },
      {
            code     : "011111", 
            lesson   : "44. Coupling (姤 gòu); Coming to Meet; Encountering <br> <br> Darkness appears unexpectedly. <br> Caution and reticence are in order.",
            imageUrl : '/images/hexagram44.png'
      },
      {
            code     : "000110", 
            lesson   : "45. Clustering (萃 cuì); Gathering Together; Association, Companionship <br> <br> To lead others toward the good, <br> we must purify our own character.",
            imageUrl : '/images/hexagram45.png'
      },
      {
            code     : "011000", 
            lesson   : "46. Ascending (升 shēng); Pushing Upward; Growing Upward <br> <br> Activity grounded in truth <br> brings progress and good fortune.",
            imageUrl : '/images/hexagram46.png'
      },
      {
            code     : "010110", 
            lesson   : "47. Confining (困 kùn); Oppression; Exhaustion <br> <br> An unavoidable time of adversity. <br> Quiet strength insures a later success.",
            imageUrl : '/images/hexagram47.png'
      },
      {
            code     : "011010", 
            lesson   : "48. Welling (井 jǐng); The Well; Replenishing, Renewal <br> <br> Return to the well of goodness.",
            imageUrl : '/images/hexagram48.png'
      },
      {
            code     : "101110", 
            lesson   : "49. Skinning (革 gé); Revolution; Abolishing the Old <br> <br> Devotion to truth enables a revolution.",
            imageUrl : '/images/hexagram49.png'
      },
      {
            code     : "011101", 
            lesson   : "50. Holding (鼎 dǐng); The Cauldron; Establishing the New <br> <br> You serve as an example to others by <br> sacrificing your ego and accepting <br> the guidance of the Higher Power.",
            imageUrl : '/images/hexagram50.png'
      },
      {
            code     : "100100", 
            lesson   : "51. Shake (震 zhèn); Arousing; Mobilizing <br> <br> The shock of unsettling events <br> brings fear and trembling. <br> Move toward a higher truth and all will be well.",
            imageUrl : '/images/hexagram51.png'
      },
      {
            code     : "001001", 
            lesson   : "52. Bound (艮 gèn); The Keeping Still; Immobility <br> <br> Still your emotions through meditation.",
            imageUrl : '/images/hexagram52.png'
      },
      {
            code     : "001011", 
            lesson   : "53. Infiltrating (漸 jiàn); Development; Auspicious Outlook, Infiltration <br> <br> Those who persevere make continuous progress.",
            imageUrl : '/images/hexagram53.png'
      },
      {
            code     : "110100", 
            lesson   : "54. Converting The Maiden (歸妹 guī mèi); The Marrying Maiden; Marrying <br> <br> In relationships, desires lead to misfortune. <br> Behave with discipline and balance.",
            imageUrl : '/images/hexagram54.png'
      },
      {
            code     : "101100", 
            lesson   : "55. Abounding (豐 fēng); Abundance; Goal Reached,Ambition Achieved <br> <br> A moment of great influence is at hand. <br> Prepare wisely and act accordingly.",
            imageUrl : '/images/hexagram55.png'
      },
      {
            code     : "001101", 
            lesson   : "56. Sojourning (旅 lǚ); The Wanderer; Travel <br> <br> We are all wanderers in the Unknown. <br> Those who travel beside the Sage <br> are protected from harm.",
            imageUrl : '/images/hexagram56.png'
      },
      {
            code     : "011011", 
            lesson   : "57. Ground (巽 xùn); The Gentle; Subtle Influence <br> <br> Consistent correctness turns every <br> situation to your advantage",
            imageUrl : '/images/hexagram57.png'
      },
      {
            code     : "110110", 
            lesson   : "58. Open (兌 duì); The Joyous; Overt Influence <br> <br> True joy is experienced by those <br> who are strong within and gentle without.",
            imageUrl : '/images/hexagram58.png'
      },
      {
            code     : "010011", 
            lesson   : "59. Dispersing (渙 huàn); Dispersion; Dispersal <br> <br> Disperse hard attitudes with gentleness.",
            imageUrl : '/images/hexagram59.png'
      },
      {
            code     : "110010", 
            lesson   : "60. Articulating (節 jié); Limitation; Discipline <br> <br> Voluntarily chosen limits empower your growth.",
            imageUrl : '/images/hexagram60.png'
      },
      {
            code     : "110011", 
            lesson   : "61. Centre Confirming (中孚 zhōng fú); Inner Truth; Staying Focused,Avoid Misrepre sentation <br> <br> Through openness and gentleness <br> the correct solution is reached.",
            imageUrl : '/images/hexagram61.png'
      },
      {
            code     : "001100", 
            lesson:   "62. Small Exceeding (小過 xiǎo guò); Small Preponderance; Small Surpassing <br> <br> In a great storm the wise bird returns <br> to her nest and waits patiently.",
            imageUrl : '/images/hexagram62.png'
      },
      {
            code     : "101010", 
            lesson   : "63. Already_Fording (既濟 jì jì); After Completion; Completion <br> <br> Good fortune unfolds for those <br> who remain on guard against <br> inferior influences.",
            imageUrl : '/images/hexagram63.png'
      },
      {
            code : "010101", 
            lesson : "64. Not-Yet Fording (未濟 wèi jì); Before Completion; Incompletion <br> <br> The transition from chaos to order depends <br> upon your achieving true inner calm.",
            imageUrl : '/images/hexagram64.png'
      }
]
//Add Comment Change this loop so it goes over an array

for (var i = 0; i < hexLesson.length; i++) {
	var lessonObject = {
		hexNumber: hexLesson[i]['code'],
		lessonText: hexLesson[i]['lesson'],
            imgUrl: hexLesson[i]['imageUrl']
	} 
	var lesson = new Lesson(lessonObject)
	lesson.save(function(err, doc){
		console.log(err)
	})
}









// code is the key and hexLesson at code is the value

// above we are looping thru the object and looking at the keys


//  "Lesson" represents the lessons in the db












