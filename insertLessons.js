// We are inserting lessons into the mongoose data

var mongoose = require('mongoose');


var Lesson = require('./models/lesson');

mongoose.connect('mongodb://localhost/Iching');
 
var hexLesson = { 
      '111111' : '1. Force (乾 qián); The Creative; Possessing Creative Power & Skill \n \n If you are alert to the creative, \n you will meet with good fortune now.',
      '000000': '2. Field (坤 kūn); The Receptive; Needing Knowledge & Skill; Do not force matters and go with the  flow \n \n Bear with change as the earth bears with us: \n by yieldiing, by accepting, by nourishing.',
      '100010': '3. Sprouting (屯 zhūn); Difficulty at the Beginning; Sprouting  \n \n If we persevere a great success is at hand.',
      '010001' : '4. Enveloping (蒙 méng); Youthful Folly; Detained, Enveloped and Inexperienced \n \n Even the foolish can attain wisdom \n by modestly following the Sage.',
      '111010' : '5. Attending (需 xū); Waiting; Uninvolvement (Wait for now), Nourishment \n \n To wait with a proper attidude \n invites the assistance fo the Higher Power.',
      '010111' : '6. Arguing (訟 sòng); Conflict; Engagement in Conflict \n \n The proper response to conflict, \n whether it lies within or without us, is disengagement.',
      '010000' : '7. Leading (師 shī); The Army; Bringing Together, Teamwork \n In times of war it is desirable \n \n to be led by a cautious and humane general.',
      '000010' : '8. Grouping (比 bǐ); Holding Together; Union \n \n Seek union with others and with the Sage.',
      '111011' : '9. Small Accumulating (小畜 xiǎo chù); Small Taming; Accumulating Resources \n \n You are temporarily restrained. \n It is a time for taking small steps.',
      '110111' : '10. Treading (履 lǚ); Treading (Conduct); Continuing with Alertness \n \n Lasting progress is won \n through quiet self-discipline.',
      '111000' : '11. Pervading (泰 tài); Peace; Pervading \n \n Heaven exists on earth for those who \n maintain correct thoughts and actions.',
      '000111' : '12. Obstruction (否 pǐ); Standstill; Stagnation \n \n In times of stagnation, attend to your attitude.',
      '101111' : '13. Concording People (同人 tóng rén); Fellowship; Fellowship, Partnership \n \n In fellowship with others, \n Embody the principles of the Sage.',
      '111101' : '14. Great Possessing (大有 dà yǒu); Great Possession; Independence, Freedom \n \n Those who are steadfastly balanced, humble, \n and in harmony with the Sage inherit \n everything under the sun.',
      '001000' : '15. Humbling (謙 qiān); Modesty; Being Reserved, Refraining \n \n The Creative acts to empty what is full \n and to offer abundance to what is modest.',
      '000100' : '16. Providing-For (豫 yù); Enthusiasm; Inducement, New Stimulus \n \n Proper enthusiasm opens every door.',
      '100110' : '17. Following (隨 suí); Following; Following \n \n Do not argue with what is; \n simply follow the progress of truth.',
      '011001' : '18. Corrupting (蠱 gǔ); Work on the Decayed; Repairing \n \n A challenge to improvement: \n that which has been spoiled through neglect \n can be rejuvinated through effort.',
      '110000' : '19. Nearing (臨 lín); Approach; Approaching Goal, Arriving \n \n Good approaches the superior person.',
      '000011' : '20. Viewing (觀 guān); Contemplation; The Withholding \n \n By concentrating on the higher laws \n you acquire the power that underlies them.',
      '100101' : '21. Gnawing Bite (噬嗑 shì kè); Biting Through; Deciding \n \n There is an obstacle to the expression of truth. \n Withdrawal into quietness allows the Sage to moderate.',
      '101001' : '22. Adorning (賁 bì); Grace; Embellishing \n \n Inside, the strength of simplicity and self-knowledge. \n Outside, the beauty of acceptance and gentleness.',
      '000001' : '23. Stripping (剝 bō); Splitting Apart; Stripping, Flaying \n \n  Do not attempt to intervene now.',
      '100000' : '24. Returning (復 fù); Return; Returning \n \n A time of darkness comes to a close.',
      '100111' : '25. Without Embroiling (無妄 wú wàng); Innocence; Without Rashness \n \n All good comes when we are innocent.',
      '111001' : '26. Great Accumulating (大畜 dà chù); Great Taming; Accumulating Wisdom \n \n In the face of rising tension, keep still. \n Honor in practice what you have learned from the I Ching.',
      '100001' : '27. Swallowing (頤 yí); Mouth Corners; Seeking Nourishment \n \n Give proper nourishment to yourself and others.',
      '011110' : '28. Great Exceeding (大過 dà guò); Great Preponderance; Great Surpassing \n \n There are great pressures at work. \n By meeting them with modesty and patience, \n you avoid misfortune and meet with success.',
      '010010' : '29. Gorge (坎 kǎn); The Abysmal Water; Darkness, Gorge \n \n Flow like pure water \n through difficult situations.',
      '101101' : '30. Radiance (離 lí); The Clinging; Clinging, Attachment \n \n Cling to the power of higher truth.',
      '001110' : '31. Conjoining (咸 xián); Influence; Attraction \n \n An influence comes \n Good fortune to those whose hearts are correct.',
      '011100' : '32. Persevering (恆 héng); Duration; Perseverance \n \n Remain steady and allow \n the world to shape itself.',
      '001111' : '33. Retiring (遯 dùn); Retreat; Withdrawing \n \n This is a time for disengagement and retreat. \n In stillness you are out of the reach of danger.',
      '111100' : '34. Great Invigorating (大壯 dà zhuàng); Great Power; Great Boldness \n \n To achieve true power and true greatness \n one must be in harmony with what is right.',
      '000101' : '35. Prospering (晉 jìn); Progress; Expansion, Promotion \n \n You progress like the rising sun. \n The brighter your virtue, the higher you rise.',
      '101000' : '36. Brightness Hiding (明夷 míng yí); Darkening of the Light; Brilliance Injured \n \n Darkness reigns in the external world now. \n Disengage from negative feelings and \n maintain your inner light.',
      '101011' : '37. Dwelling People (家人 jiā rén); The Family; Family \n \n A healthy family, a healthy country, \n a healthy world--all grow outward \n from a single superior person.',
      '110101' : '38. Polarising (睽 kuí); Opposition; Division, Divergence \n \n Misunderstanding truth creates opposition.',
      '001010' : '39. Limping (蹇 jiǎn); Obstruction; Halting, Hardship \n \n Surrounded by obstructions, one must first \n retreat, then seek the direction of the Sage.',
      '010100' : '40. Taking-Apart (解 xiè); Deliverance; Liberation, Solution \n \n A change in attitude \n delivers you from difficulties.',
      '110001' : '41. Diminishing (損 sǔn); Decrease; Decrease \n \n Be still, lessen the power of the \n ego, and misfortune will be avoided.',
      '100011' : '42. Augmenting (益 yì); Increase; Increase \n \n Powerful improvements are underway.',
      '111110' : '43. Parting (夬 guài); Breakthrough; Separation \n \n A breakthrough.  Do not be drawn back into bad habits.',
      '011111' : '44. Coupling (姤 gòu); Coming to Meet; Encountering \n \n Darkness appears unexpectedly. \n Caution and reticence are in order.',
      '000110' : '45. Clustering (萃 cuì); Gathering Together; Association, Companionship \n \n To lead others toward the good, \n we must purify our own character.',
      '011000' : '46. Ascending (升 shēng); Pushing Upward; Growing Upward \n \n Activity grounded in truth \n brings progress and good fortune.',
      '010110' : '47. Confining (困 kùn); Oppression; Exhaustion \n \n An unavoidable time of adversity. \n Quiet strength insures a later success.',
      '011010' : '48. Welling (井 jǐng); The Well; Replenishing, Renewal \n \n Return to the well of goodness.',
      '101110' : '49. Skinning (革 gé); Revolution; Abolishing the Old \n \n Devotion to truth enables a revolution.',
      '011101' : '50. Holding (鼎 dǐng); The Cauldron; Establishing the New \n \n You serve as an example to others by \n sacrificing your ego and accepting \n the guidance of the Higher Power.',
      '100100' : '51. Shake (震 zhèn); Arousing; Mobilizing \n \n The shock of unsettling events \n brings fear and trembling. \n Move toward a higher truth and all will be well.',
      '001001' : '52. Bound (艮 gèn); The Keeping Still; Immobility \n \n Still your emotions through meditation.',
      '001011' : '53. Infiltrating (漸 jiàn); Development; Auspicious Outlook, Infiltration \n \n Those who persevere make continuous progress.',
      '110100' : '54. Converting The Maiden (歸妹 guī mèi); The Marrying Maiden; Marrying \n \n In relationships, desires lead to misfortune. \n Behave with discipline and balance.',
      '101100' : '55. Abounding (豐 fēng); Abundance; Goal Reached,Ambition Achieved \n \n A moment of great influence is at hand. \n Prepare wisely and act accordingly.',
      '001101' : '56. Sojourning (旅 lǚ); The Wanderer; Travel \n \n We are all wanderers in the Unknown. \n Those who travel beside the Sage \n are protected from harm.',
      '011011' : '57. Ground (巽 xùn); The Gentle; Subtle Influence \n \n Consistent correctness turns every \n situation to your advantage',
      '110110' : '58. Open (兌 duì); The Joyous; Overt Influence \n \n True joy is experienced by those \n who are strong within and gentle without.',
      '010011' : '59. Dispersing (渙 huàn); Dispersion; Dispersal \n \n Disperse hard attitudes with gentleness.',
      '110010' : '60. Articulating (節 jié); Limitation; Discipline \n \n Voluntarily chosen limits empower your growth.',
      '110011' : '61. Centre Confirming (中孚 zhōng fú); Inner Truth; Staying Focused,Avoid Misrepre sentation \n \n Through openness and gentleness \n the correct solution is reached.',
      '001100': '62. Small Exceeding (小過 xiǎo guò); Small Preponderance; Small Surpassing \n \n In a great storm the wise bird returns \n to her nest and waits patiently.',
      '101010' : '63. Already_Fording (既濟 jì jì); After Completion; Completion \n \n Good fortune unfolds for those \n who remain on guard against \n inferior influences.',
      '010101' : '64. Not-Yet Fording (未濟 wèi jì); Before Completion; Incompletion \n \n The transition from chaos to order depends \n upon your achieving true inner calm.' }

for (code in hexLesson) {
	var lessonObject = {
		hexNumber: code,
		lessonText: hexLesson[code]
	} 
	var lesson = new Lesson(lessonObject)
	lesson.save(function(err, doc){
		console.log(err)
	})
}









// code is the key and hexLesson at code is the value

// above we are looping thru the object and looking at the keys


//  "Lesson" represents the lessons in the db












