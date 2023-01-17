/* Capturando os inputs */

const horizontalOffset = document.querySelector('#horizontal-offset')
const verticalOffset = document.querySelector('#vertical-offset')
const blurRadius = document.querySelector('#blur-radius')
const spreadRadius = document.querySelector('#spread-radius')
const colorPick = document.querySelector('#color')

/* Capturar o Elemento  */

const shadowElement = document.querySelector('.element')

/* Capturar Variáveis css*/

function acessVariables(variable) {
	return getComputedStyle(document.documentElement).getPropertyValue(
		`${variable}`,
	)
}

let horizontalShadow = acessVariables('--bx-sd-h')
let verticalShadow = acessVariables('--bx-sd-v')
let blurRadiusShadow = acessVariables('--bx-sd-br')
let spreadRadiusShadow = acessVariables('--bx-sd-sr')
let colorShadow = acessVariables('--bx-sd-color')

/* Função que irá atribuir o valor do input ao valor da variável */

function changeShadowValue(elemento, input) {
	return (elemento = input.value + 'px')
}

/* Função que irá atribuir a cor do picker ao valor da variável */

function getShadowColor(element, input) {
	return (elemento = input.value)
}

horizontalOffset.oninput = () => {
	horizontalShadow = changeShadowValue(horizontalShadow, horizontalOffset)
	document.body.style.setProperty('--bx-sd-h', horizontalShadow)
}
verticalOffset.oninput = () => {
	verticalShadow = changeShadowValue(verticalShadow, verticalOffset)
	document.body.style.setProperty('--bx-sd-v', verticalShadow)
}
blurRadius.oninput = () => {
	blurRadiusShadow = changeShadowValue(blurRadiusShadow, blurRadius)
	document.body.style.setProperty('--bx-sd-br', blurRadiusShadow)
}
spreadRadius.oninput = () => {
	spreadRadiusShadow = changeShadowValue(spreadRadiusShadow, spreadRadius)
	document.body.style.setProperty('--bx-sd-sr', spreadRadiusShadow)
}
colorPick.oninput = () => {
	colorShadow = getShadowColor(colorShadow, colorPick)
	document.body.style.setProperty('--bx-sd-color', colorShadow)
}
