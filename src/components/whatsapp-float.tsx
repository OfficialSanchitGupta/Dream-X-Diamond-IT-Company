'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { MessageCircle, X, Phone } from 'lucide-react'

export function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)

  const phoneNumber = '+15551234567'
  const message = encodeURIComponent('Hi! I\'m interested in your services. Can you help me?')

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  const handleWhatsAppClick = () => {
    window.open(whatsappUrl, '_blank')
    setIsOpen(false)
  }

  const handleCallClick = () => {
    window.open(`tel:${phoneNumber}`, '_blank')
  }

  return (
    <>
      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <Button
            onClick={() => setIsOpen(true)}
            size="lg"
            className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <MessageCircle className="w-6 h-6" />
            <span className="sr-only">WhatsApp</span>
          </Button>
        )}

        {/* WhatsApp Chat Window */}
        {isOpen && (
          <div className={`bg-white rounded-lg shadow-2xl border border-gray-200 transition-all duration-300 ${
            isMinimized ? 'w-80 h-16' : 'w-80 h-[500px]'
          }`}>
            {/* Header */}
            <div className="bg-green-500 text-white p-4 rounded-t-lg flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold">Dream X Diamond</div>
                  <div className="text-xs opacity-90">Typically replies within minutes</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="text-white hover:bg-white/20 h-8 w-8"
                >
                  {isMinimized ? (
                    <MessageCircle className="w-4 h-4" />
                  ) : (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/20 h-8 w-8"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Chat Content */}
                <div className="p-4 h-[352px] overflow-y-auto bg-gray-50">
                  <div className="space-y-4">
                    {/* Welcome Message */}
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="w-4 h-4 text-white" />
                      </div>
                      <div className="bg-white rounded-lg p-3 max-w-[80%]">
                        <p className="text-sm">
                          Hi! Welcome to Dream X Diamond. 👋
                        </p>
                        <p className="text-sm mt-1">
                          How can I help you today?
                        </p>
                      </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="space-y-2">
                      <p className="text-xs text-gray-500 font-medium">Quick Actions:</p>
                      <div className="grid grid-cols-2 gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-xs h-auto p-2"
                          onClick={handleWhatsAppClick}
                        >
                          <MessageCircle className="w-3 h-3 mr-1" />
                          Start Chat
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-xs h-auto p-2"
                          onClick={handleCallClick}
                        >
                          <Phone className="w-3 h-3 mr-1" />
                          Call Us
                        </Button>
                      </div>
                    </div>

                    {/* Services */}
                    <div className="space-y-2">
                      <p className="text-xs text-gray-500 font-medium">Popular Services:</p>
                      <div className="space-y-1">
                        {[
                          'Web Development',
                          'Mobile App Development',
                          'Cloud Services',
                          'Cybersecurity'
                        ].map((service) => (
                          <button
                            key={service}
                            className="w-full text-left p-2 rounded bg-white border border-gray-200 hover:border-green-500 hover:bg-green-50 transition-colors text-sm"
                            onClick={() => {
                              const serviceMessage = encodeURIComponent(`Hi! I'm interested in ${service}. Can you provide more information?`)
                              window.open(`https://wa.me/${phoneNumber}?text=${serviceMessage}`, '_blank')
                              setIsOpen(false)
                            }}
                          >
                            {service}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Business Hours */}
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm font-medium text-blue-900">Business Hours</span>
                      </div>
                      <div className="text-xs text-blue-700">
                        <div>Monday - Friday: 9:00 AM - 6:00 PM</div>
                        <div>Saturday: 10:00 AM - 4:00 PM</div>
                        <div>Sunday: Closed</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Input Area */}
                <div className="p-4 border-t border-gray-200 bg-white rounded-b-lg">
                  <div className="flex gap-2">
                    <Button
                      onClick={handleWhatsAppClick}
                      className="flex-1 bg-green-500 hover:bg-green-600 text-white"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Chat on WhatsApp
                    </Button>
                    <Button
                      variant="outline"
                      onClick={handleCallClick}
                      className="bg-white border-gray-300"
                    >
                      <Phone className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </div>

      {/* Minimized State */}
      {isMinimized && isOpen && (
        <div className="fixed bottom-6 right-6 z-40">
          <Button
            onClick={() => setIsMinimized(false)}
            size="lg"
            className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <MessageCircle className="w-6 h-6" />
            <span className="sr-only">Open WhatsApp Chat</span>
          </Button>
        </div>
      )}
    </>
  )
}