const tag = document.getElementById("type-effect");
const speed = 30;
const text =
	"Hi! I am Taras, a Master's student at Fordham University and an NCAA Division 1 swimmer. Originally from Ukraine, I moved to Italy at three and have always been a competitive athlete. Before my swimming career, I was a cyclist and attended a scientific high school in Italy before switching to an engineering school. After completing my Bachelor's degree in Computer Science as a full-time Division 2 athlete at McKendree University in 2022, I was accepted into Fordham University's master's program in Computer Science, focusing on Artificial Intelligence and Software Engineering. To learn more about my Computer Science skills or swimming records, please scroll down.";

var i = 0;

const writer = () => {
	if (i < text.length) {
		tag.innerHTML += text.charAt(i);
		i++;
		setTimeout(writer, speed);
	}
};

window.onload = writer;
