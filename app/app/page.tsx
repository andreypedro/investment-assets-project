"use client";

import Image from "next/image";
import { useState } from "react";

const profileAdjustments = [
	{
		title: "Foto profissional",
		description: "Use uma foto clara, nítida e com boa iluminação.",
	},
	{
		title: "Resumo objetivo",
		description: "Descreva quem você é, suas principais habilidades e objetivos.",
	},
	{
		title: "Experiências",
		description: "Liste experiências relevantes, focando em resultados e aprendizados.",
	},
	{
		title: "Palavras-chave",
		description: "Inclua termos do seu setor para facilitar buscas de recrutadores.",
	},
];

const initialCareerTrack = [
	{
		level: "Júnior",
		concepts: [
			{ label: "Fundamentos técnicos", done: false },
			{ label: "Primeiros projetos", done: false },
			{ label: "Colaboração", done: false },
		],
	},
	{
		level: "Pleno",
		concepts: [
			{ label: "Projetos intermediários", done: false },
			{ label: "Aprofundamento técnico", done: false },
			{ label: "Mentoria pontual", done: false },
		],
	},
	{
		level: "Sênior",
		concepts: [
			{ label: "Liderança técnica", done: false },
			{ label: "Projetos complexos", done: false },
			{ label: "Mentoria de equipes", done: false },
		],
	},
];

function ProfileScoreChart({ score }: { score: number }) {
	// Simple circular progress bar
	const radius = 48;
	const stroke = 10;
	const normalizedRadius = radius - stroke / 2;
	const circumference = normalizedRadius * 2 * Math.PI;
	const progress = circumference - (score / 100) * circumference;
	return (
		<svg height={radius * 2} width={radius * 2} className="mx-auto block">
			<circle
				stroke="#e0e7ef"
				fill="transparent"
				strokeWidth={stroke}
				r={normalizedRadius}
				cx={radius}
				cy={radius}
			/>
			<circle
				stroke="#2563EB"
				fill="transparent"
				strokeWidth={stroke}
				strokeLinecap="round"
				strokeDasharray={circumference + " " + circumference}
				strokeDashoffset={progress}
				r={normalizedRadius}
				cx={radius}
				cy={radius}
				style={{ transition: "stroke-dashoffset 0.5s" }}
			/>
			<text
				x="50%"
				y="50%"
				textAnchor="middle"
				dy=".3em"
				fontSize="1.5rem"
				fill="#2563EB"
				fontWeight="bold"
			>
				{score}
			</text>
		</svg>
	);
}

export default function Home() {
	const [careerTrack, setCareerTrack] = useState(initialCareerTrack);
	// Score fictício baseado em quantos conceitos estão marcados como ok
	const totalConcepts = careerTrack.reduce(
		(acc, t) => acc + t.concepts.length,
		0
	);
	const completedConcepts = careerTrack.reduce(
		(acc, t) => acc + t.concepts.filter((c) => c.done).length,
		0
	);
	const score = Math.round((completedConcepts / totalConcepts) * 100);

	const handleToggleConcept = (levelIdx: number, conceptIdx: number) => {
		setCareerTrack((prev) =>
			prev.map((track, lidx) =>
				lidx === levelIdx
					? {
							...track,
							concepts: track.concepts.map((c, cidx) =>
								cidx === conceptIdx ? { ...c, done: !c.done } : c
							),
					  }
					: track
			)
		);
	};

	return (
		<div className="flex flex-col gap-10">
			<section className="flex flex-col items-center justify-center py-10 px-4 text-center">
				<Image
					src="/logo-alt.svg"
					alt="Logo"
					width={60}
					height={60}
					className="mb-4"
					priority
					unoptimized
					style={{ width: 60, height: "auto" }}
				/>
				<h1 className="text-3xl font-bold text-blue-800 mb-2">
					Dashboard do seu LinkedIn
				</h1>
				<p className="text-base text-blue-900 mb-6 max-w-md">
					Veja sugestões para melhorar seu perfil e acompanhe sua evolução na
					trilha de carreira.
				</p>
				<div className="my-6">
					<ProfileScoreChart score={score} />
					<div className="text-blue-700 font-semibold mt-2">
						Score do Perfil
					</div>
				</div>
			</section>

			<section className="bg-blue-50 rounded-lg p-6">
				<h2 className="text-lg font-semibold text-blue-700 mb-4">
					Ajustes recomendados
				</h2>
				<ul className="space-y-2">
					{profileAdjustments.map((item, idx) => (
						<li
							key={idx}
							className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-start sm:items-center"
						>
							<span className="font-medium text-blue-800 min-w-[120px]">
								{item.title}:
							</span>
							<span className="text-blue-900">{item.description}</span>
						</li>
					))}
				</ul>
			</section>

			<section className="bg-white rounded-lg p-6 border border-blue-100">
				<h2 className="text-lg font-semibold text-blue-700 mb-4">
					Trilha de carreira
				</h2>
				<div className="flex flex-col sm:flex-row gap-4">
					{careerTrack.map((track, levelIdx) => (
						<div key={track.level} className="flex-1 text-center">
							<h3 className="font-bold text-blue-700 mb-2">{track.level}</h3>
							<ul className="text-blue-900 text-sm space-y-1">
								{track.concepts.map((concept, cidx) => (
									<li
										key={cidx}
										className="flex items-center gap-2 justify-center"
									>
										<input
											type="checkbox"
											checked={concept.done}
											onChange={() => handleToggleConcept(levelIdx, cidx)}
											className="accent-blue-700 w-4 h-4"
										/>
										<span
											className={
												concept.done
													? "line-through text-blue-400"
													: ""
											}
										>
											{concept.label}
										</span>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</section>
		</div>
	);
}