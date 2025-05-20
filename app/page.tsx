"use client"

import type React from "react"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { HeartIcon, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export default function GirlfriendQuiz() {
  const [answers, setAnswers] = useState({
    question1: "",
    question2: "",
    question3: "",
    question4: "",
    question5: "",
    question6: "",
    question7: "",
    question8: "",
    question9: "",
    question10: "",
  })

  const [showSuccess, setShowSuccess] = useState(false)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const questions = [
    {
      id: "question1",
      text: "دختر کوچولوی من کیه؟",
      options: [
        { value: "من", label: "من" },
        { value: "ترانه داربوئی", label: "ترانه داربوئی" },
        { value: "رلا", label: "رلا" },
      ],
    },
    {
      id: "question2",
      text: "عشق من کیه؟",
      options: [
        { value: "من", label: "من" },
        { value: "ترانه داربوئی", label: "ترانه داربوئی" },
        { value: "رلا", label: "رلا" },
      ],
    },
    {
      id: "question3",
      text: "دختر ناز نازی من کیه؟",
      options: [
        { value: "من", label: "من" },
        { value: "ترانه داربوئی", label: "ترانه داربوئی" },
        { value: "رلا", label: "رلا" },
      ],
    },
    {
      id: "question4",
      text: "کیا کیو از همه بیشتر دوست داره؟",
      options: [
        { value: "من", label: "من" },
        { value: "ترانه داربوئی", label: "ترانه داربوئی" },
        { value: "رلا", label: "رلا" },
      ],
    },
    {
      id: "question5",
      text: "لومل کیا کیه؟",
      options: [
        { value: "من", label: "من" },
        { value: "ترانه داربوئی", label: "ترانه داربوئی" },
        { value: "رلا", label: "رلا" },
      ],
    },
    {
      id: "question6",
      text: "قشنگترین دختر توی دنیا کیه؟",
      options: [
        { value: "من", label: "من" },
        { value: "ترانه داربوئی", label: "ترانه داربوئی" },
        { value: "رلا", label: "رلا" },
      ],
    },
    {
      id: "question7",
      text: "کیانوش قربون کی بره؟",
      options: [
        { value: "من", label: "من" },
        { value: "ترانه داربوئی", label: "ترانه داربوئی" },
        { value: "رلا", label: "رلا" },
      ],
    },
    {
      id: "question8",
      text: "کی عااتااان مااتااانی کیانوش هست؟",
      options: [
        { value: "من", label: "من" },
        { value: "ترانه داربوئی", label: "ترانه داربوئی" },
        { value: "رلا", label: "رلا" },
      ],
    },
    {
      id: "question9",
      text: "عمر کیا کیه؟",
      options: [
        { value: "من", label: "من" },
        { value: "ترانه داربوئی", label: "ترانه داربوئی" },
        { value: "رلا", label: "رلا" },
      ],
    },
    {
      id: "question10",
      text: "پرنسس کوچولوی من کیه؟",
      options: [
        { value: "من", label: "من" },
        { value: "ترانه داربوئی", label: "ترانه داربوئی" },
        { value: "رلا", label: "رلا" },
      ],
    },
  ]

  const handleChange = (question: keyof typeof answers, value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [question]: value,
    }))

    // Move to next question after a short delay
    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setIsTransitioning(true)
        setTimeout(() => {
          setCurrentQuestionIndex(currentQuestionIndex + 1)
          setIsTransitioning(false)
        }, 300)
      }
    }, 500)
  }

  // Check if all questions have been answered (any answer is correct)
  const allAnswered = Object.values(answers).every((answer) => answer !== "")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (allAnswered) {
      setShowSuccess(true)
    }
  }

  // Floating hearts animation
  const [hearts, setHearts] = useState<{ id: number; x: number; size: number; delay: number; duration: number }[]>([])

  useEffect(() => {
    const newHearts = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 20 + 10,
      delay: Math.random() * 10,
      duration: Math.random() * 10 + 15,
    }))
    setHearts(newHearts)
  }, [])

  const currentQuestion = questions[currentQuestionIndex]

  const lastQuestionId = questions[questions.length - 1].id;
  const lastAnswered = answers[lastQuestionId as keyof typeof answers] !== "";

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-200 to-pink-100 flex flex-col items-center justify-center p-4 font-vazir relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            className="absolute text-pink-300 opacity-30"
            initial={{ y: "110vh", x: `${heart.x}vw`, scale: heart.size / 20 }}
            animate={{ y: "-10vh" }}
            transition={{
              duration: heart.duration,
              delay: heart.delay,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            <HeartIcon size={heart.size} fill="currentColor" />
          </motion.div>
        ))}
      </div>

      {/* Glassmorphism card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white/70 backdrop-blur-xl rounded-3xl shadow-lg p-8 border border-pink-200 relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-white/70 -z-10 rounded-3xl"></div>
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-pink-200/50 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-pink-300/50 rounded-full blur-3xl"></div>

        <div className="text-center mb-10 relative">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="flex justify-center gap-2">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5, type: "spring" }}
                >
                  <HeartIcon className="h-6 w-6 text-pink-400" fill="#f9a8d4" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8" dir="rtl">
          {/* Progress indicator */}
          <div className="flex gap-1 justify-between mb-6">
            {questions.map((_, index) => (
              <motion.div
                key={index}
                className={`h-2 rounded-full ${index <= currentQuestionIndex ? "bg-pink-400" : "bg-pink-200"}`}
                initial={{ width: "28%" }}
                animate={{ width: "28%" }}
                style={{ width: "28%" }}
              />
            ))}
          </div>

          {/* Current question */}
          <motion.div
            key={currentQuestionIndex}
            initial={{ x: isTransitioning ? -20 : 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white/70 p-6 rounded-2xl border border-pink-200 shadow-md"
          >
            <h3 className="text-2xl font-bold text-pink-600 mb-6 text-center">{currentQuestion.text}</h3>

            <div className="space-y-4">
              {currentQuestion.options.map((option) => (
                <motion.div
                  key={option.value}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex items-center p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                    answers[currentQuestion.id as keyof typeof answers] === option.value
                      ? "bg-gradient-to-r from-pink-300 to-pink-200 border-2 border-pink-300"
                      : "bg-white/80 hover:bg-pink-50 border border-pink-100"
                  }`}
                  onClick={() => handleChange(currentQuestion.id as keyof typeof answers, option.value)}
                >
                  <div
                    className={`w-6 h-6 rounded-full mr-3 flex items-center justify-center ${
                      answers[currentQuestion.id as keyof typeof answers] === option.value
                        ? "bg-white"
                        : "border-2 border-pink-300"
                    }`}
                  >
                    {answers[currentQuestion.id as keyof typeof answers] === option.value && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-3 h-3 rounded-full bg-pink-400"
                      />
                    )}
                  </div>
                  <span className="text-xl font-medium text-pink-700 mr-3">{option.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Submit button - only show on last question */}
          {currentQuestionIndex === questions.length - 1 && answers[questions[questions.length - 1].id as keyof typeof answers] !== "" && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-400 to-pink-300 hover:from-pink-500 hover:to-pink-400 text-lg py-7 rounded-xl transition-all duration-300 shadow-md group"
              >
                <span className="mr-2 text-white">حالا که جواب دادی بزن رو من</span>
                <Sparkles className="h-5 w-5 text-white group-hover:animate-pulse" />
              </Button>
            </motion.div>
          )}
        </form>
      </motion.div>

      {/* Success dialog */}
      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className="bg-white backdrop-blur-lg border border-pink-200 max-w-sm rounded-3xl shadow-lg">
          <DialogHeader>
            <DialogTitle className="text-center text-3xl font-bold text-pink-600">آفرین دختر قشنگم</DialogTitle>
          </DialogHeader>
          <div className="flex justify-center mb-4">
            <img
              src="/sticker.gif"
              alt="Love GIF"
              className="w-32 h-32 object-contain rounded-xl"
            />
          </div>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center py-8 flex-wrap gap-3"
          >
            {[...Array(9)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: [0, 10, -10, 0] }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.5,
                  rotate: {
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "mirror",
                    duration: 2,
                    delay: i * 0.2,
                  },
                }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: i * 0.1, duration: 0.5, type: "spring" }}
                >
                  <Image
                    src="/vite.svg"
                    alt="Vite Logo"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
          <div className="text-center text-xl text-pink-600 font-bold pb-4">بی‌نهایت دوستت دارم دخترم</div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
