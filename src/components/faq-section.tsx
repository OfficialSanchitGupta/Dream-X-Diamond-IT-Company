'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { HelpCircle, Star } from 'lucide-react'

interface FAQ {
  question: string
  answer: string
  popular?: boolean
}

const faqs: FAQ[] = [
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary depending on complexity. A simple website typically takes 4-6 weeks, while complex applications can take 3-6 months.',
    popular: true
  },
  {
    question: 'Do you provide ongoing support?',
    answer: 'Yes, we offer comprehensive support packages including 24/7 monitoring, regular maintenance, and priority support.',
    popular: true
  },
  {
    question: 'What technologies do you work with?',
    answer: 'We work with modern technologies including React, Node.js, Python, AWS, Azure, Docker, Kubernetes, and many more.',
    popular: false
  },
  {
    question: 'How do you ensure project quality?',
    answer: 'We follow industry best practices including code reviews, automated testing, and quality assurance processes.',
    popular: false
  },
  {
    question: 'Can you work with existing systems?',
    answer: 'Absolutely! We have extensive experience integrating with existing systems and third-party APIs.',
    popular: false
  }
]

export function FAQSection() {
  const popularFAQs = faqs.filter(faq => faq.popular)

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Frequently Asked Questions</Badge>
          <h2 className="text-4xl font-bold mb-4">Got Questions? We've Got Answers</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our services and process.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Popular FAQs */}
          {popularFAQs.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  Popular Questions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {popularFAQs.map((faq, index) => (
                    <AccordionItem key={index} value={`popular-${index}`}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          )}

          {/* All FAQs */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HelpCircle className="w-5 h-5" />
                All Questions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                      {faq.popular && (
                        <Badge variant="secondary" className="ml-2">
                          <Star className="w-3 h-3 mr-1" />
                          Popular
                        </Badge>
                      )}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}