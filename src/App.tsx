import { motion } from "motion/react";
import { 
  Heart, 
  MessageSquare, 
  Zap, 
  ShieldCheck, 
  Sparkles, 
  Target, 
  Brain, 
  ArrowRight, 
  CheckCircle2,
  Smartphone,
  Users,
  TrendingUp,
  Search,
  MessageCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function App() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary/20">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Heart className="text-white w-5 h-5 fill-current" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-primary">HeartSpark</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#features" className="hover:text-primary transition-colors">Features</a>
            <a href="#benefits" className="hover:text-primary transition-colors">Benefits</a>
            <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
          </div>
          <Button size="sm" className="rounded-full px-6">Get Started</Button>
        </div>
      </nav>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-32 px-4">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full -z-10 opacity-20">
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-400 rounded-full blur-[120px]" />
          </div>
          
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="secondary" className="mb-6 py-1.5 px-4 rounded-full bg-primary/10 text-primary border-primary/20 font-medium">
                <Sparkles className="w-3.5 h-3.5 mr-2" />
                BehaviorStack™ Smart AI Powered
              </Badge>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-extrabold mb-6 leading-[1.1]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
            >
              Say the <span className="text-primary">right thing</span>,<br />at the right time.
            </motion.h1>
            
            <motion.p 
              className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Turn uncertain emotional situations into high-probability connection outcomes using behavior-driven decision intelligence.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap items-center justify-center gap-3 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.8 }}
            >
              <Badge variant="outline" className="rounded-full px-4 py-1 border-primary/20 bg-primary/5 text-primary font-semibold">
                ✨ Psychology-driven
              </Badge>
              <Badge variant="outline" className="rounded-full px-4 py-1 border-primary/20 bg-primary/5 text-primary font-semibold">
                🎯 Personalized
              </Badge>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <Button size="lg" className="rounded-full px-8 text-lg h-14 group">
                Start Connecting
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 text-lg h-14 border-primary/20 hover:bg-primary/5">
                See How It Works
              </Button>
            </motion.div>

            {/* App Preview Mockup */}
            <motion.div 
              className="mt-20 relative mx-auto max-w-4xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <div className="relative rounded-3xl overflow-hidden border-8 border-white shadow-2xl shadow-primary/20 bg-white">
                <img 
                  src="/images/hero.png" 
                  alt="People connecting through HeartSpark" 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=1600&h=900";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />
              </div>
              
              {/* Floating UI Elements */}
              <motion.div 
                className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-border hidden md:block"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <TrendingUp className="text-green-600 w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium">Response Rate</p>
                    <p className="text-lg font-bold text-primary">+84%</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-border hidden md:block"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center">
                    <Brain className="text-primary w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium">AI Analysis</p>
                    <p className="text-sm font-bold">"High Interest Detected"</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Product Tour / Showcase */}
        <section className="py-24 px-4 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 border-primary/30 text-primary">Product Tour</Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">See BehaviorStack™ in Action</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Take a look inside the HeartSpark ecosystem and see how our AI transforms your relationship dynamics.
              </p>
            </div>

            <Tabs defaultValue="dashboard" orientation="vertical" className="w-full gap-8 lg:gap-12 flex-col lg:flex-row">
              <div className="w-full lg:w-72 shrink-0">
                <TabsList className="bg-muted/30 p-1.5 rounded-2xl h-auto w-full flex-row lg:flex-col gap-1 border border-border/50">
                  <TabsTrigger value="dashboard" className="rounded-xl px-4 py-3 justify-start gap-3 data-[state=active]:bg-white data-[state=active]:shadow-sm">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <TrendingUp className="w-4 h-4 text-primary" />
                    </div>
                    <div className="text-left hidden lg:block">
                      <p className="font-bold text-sm">Dashboard</p>
                      <p className="text-[10px] text-muted-foreground">Command Center</p>
                    </div>
                    <span className="lg:hidden">Dashboard</span>
                  </TabsTrigger>
                  <TabsTrigger value="profile" className="rounded-xl px-4 py-3 justify-start gap-3 data-[state=active]:bg-white data-[state=active]:shadow-sm">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Users className="w-4 h-4 text-primary" />
                    </div>
                    <div className="text-left hidden lg:block">
                      <p className="font-bold text-sm">Profile Maker</p>
                      <p className="text-[10px] text-muted-foreground">Magnetic Bios</p>
                    </div>
                    <span className="lg:hidden">Profile</span>
                  </TabsTrigger>
                  <TabsTrigger value="opener" className="rounded-xl px-4 py-3 justify-start gap-3 data-[state=active]:bg-white data-[state=active]:shadow-sm">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Zap className="w-4 h-4 text-primary" />
                    </div>
                    <div className="text-left hidden lg:block">
                      <p className="font-bold text-sm">Opening Lines</p>
                      <p className="text-[10px] text-muted-foreground">OCR Powered</p>
                    </div>
                    <span className="lg:hidden">Openers</span>
                  </TabsTrigger>
                  <TabsTrigger value="conversation" className="rounded-xl px-4 py-3 justify-start gap-3 data-[state=active]:bg-white data-[state=active]:shadow-sm">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-4 h-4 text-primary" />
                    </div>
                    <div className="text-left hidden lg:block">
                      <p className="font-bold text-sm">Conversation</p>
                      <p className="text-[10px] text-muted-foreground">Smart Replies</p>
                    </div>
                    <span className="lg:hidden">Chat</span>
                  </TabsTrigger>
                  <TabsTrigger value="game" className="rounded-xl px-4 py-3 justify-start gap-3 data-[state=active]:bg-white data-[state=active]:shadow-sm">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Sparkles className="w-4 h-4 text-primary" />
                    </div>
                    <div className="text-left hidden lg:block">
                      <p className="font-bold text-sm">Question Game</p>
                      <p className="text-[10px] text-muted-foreground">Icebreakers</p>
                    </div>
                    <span className="lg:hidden">Game</span>
                  </TabsTrigger>
                </TabsList>
              </div>

              <div className="flex-1 min-w-0">
                <TabsContent value="dashboard" className="mt-0 focus-visible:outline-none">
                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                        <TrendingUp className="w-3 h-3" /> Module 01
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold tracking-tight">Your Emotional Command Center</h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        The HeartSpark dashboard gives you instant access to all BehaviorStack™ modules. Track your matches, optimize your profile, and get real-time suggestions for your active conversations.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                          "Dating Profile Maker",
                          "Opening Line Generator",
                          "Conversation Maker",
                          "The Question Game"
                        ].map((item, i) => (
                          <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white border border-border/50 shadow-sm">
                            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                              <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                            </div>
                            <span className="text-sm font-semibold">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="relative group">
                      <div className="absolute -inset-4 bg-primary/5 rounded-[2.5rem] blur-2xl group-hover:bg-primary/10 transition-colors" />
                      <div className="relative rounded-3xl overflow-hidden border-8 border-white shadow-2xl bg-white aspect-[4/5]">
                        <img 
                          src="/images/dashboard.png" 
                          alt="HeartSpark Dashboard" 
                          className="w-full h-full object-cover object-top"
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            e.currentTarget.src = "https://picsum.photos/seed/dashboard/800/1000";
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="profile" className="mt-0 focus-visible:outline-none">
                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                        <Users className="w-3 h-3" /> Module 02
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold tracking-tight">Magnetic Profile Maker</h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        Stop blending in. Our Profile Maker uses behavioral psychology to highlight your best traits across Tinder, Bumble, Hinge, and more.
                      </p>
                      <div className="space-y-4">
                        <div className="p-4 bg-white rounded-2xl border border-border shadow-sm">
                          <p className="text-sm font-bold mb-2 flex items-center gap-2">
                            <Smartphone className="w-4 h-4 text-primary" /> Multi-Platform Optimization
                          </p>
                          <p className="text-sm text-muted-foreground">Tailored bios for Tinder, Bumble, Hinge, Match, and OkCupid.</p>
                        </div>
                        <div className="p-4 bg-white rounded-2xl border border-border shadow-sm">
                          <p className="text-sm font-bold mb-2 flex items-center gap-2">
                            <Target className="w-4 h-4 text-primary" /> AI Recommended Interests
                          </p>
                          <p className="text-sm text-muted-foreground">Select from AI-curated interests like Travel, Fitness, Music, and more to spark better connections.</p>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 relative group">
                      <div className="absolute -inset-4 bg-primary/5 rounded-[2.5rem] blur-2xl group-hover:bg-primary/10 transition-colors" />
                      <div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-xl bg-white aspect-[3/4]">
                        <img 
                          src="/images/profile_maker_1.png" 
                          alt="Profile Maker Platform" 
                          className="w-full h-full object-cover object-top"
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            e.currentTarget.src = "https://picsum.photos/seed/profile1/600/800";
                          }}
                        />
                      </div>
                      <div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-xl bg-white aspect-[3/4]">
                        <img 
                          src="/images/profile_maker_2.png" 
                          alt="Profile Maker Tone" 
                          className="w-full h-full object-cover object-top"
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            e.currentTarget.src = "https://picsum.photos/seed/profile2/600/800";
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="opener" className="mt-0 focus-visible:outline-none">
                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                        <Zap className="w-3 h-3" /> Module 03
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold tracking-tight">Irresistible Opening Lines</h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        Never send a boring "Hey" again. Upload a screenshot of their profile, and BehaviorStack™ will craft a personalized opener they can't ignore.
                      </p>
                      <div className="flex gap-3 mb-6">
                        <Badge variant="secondary" className="bg-blue-50 text-blue-600 border-blue-100">OCR Powered</Badge>
                        <Badge variant="secondary" className="bg-purple-50 text-purple-600 border-purple-100">Psychology Driven</Badge>
                      </div>
                      <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10 italic text-primary font-medium">
                        "BehaviorStack™ Smart AI will extract their interests and craft a personalized opener."
                      </div>
                    </div>
                    <div className="relative group">
                      <div className="absolute -inset-4 bg-primary/5 rounded-[2.5rem] blur-2xl group-hover:bg-primary/10 transition-colors" />
                      <div className="relative rounded-3xl overflow-hidden border-8 border-white shadow-2xl bg-white aspect-[4/5]">
                        <img 
                          src="/images/opening_line.png" 
                          alt="Opening Line Generator" 
                          className="w-full h-full object-cover object-top"
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            e.currentTarget.src = "https://picsum.photos/seed/opener/800/1000";
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="conversation" className="mt-0 focus-visible:outline-none">
                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                        <MessageCircle className="w-3 h-3" /> Module 04
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold tracking-tight">The Conversation Maker</h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        Keep the spark alive with flirty, engaging responses tailored to your relationship stage—from early dating to established connections.
                      </p>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          "Early Dating",
                          "Getting Serious",
                          "Long Distance",
                          "Rekindling"
                        ].map((stage, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm font-bold p-3 rounded-xl bg-white border border-border shadow-sm">
                            <div className="w-2 h-2 rounded-full bg-primary" /> {stage}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="relative group">
                      <div className="absolute -inset-4 bg-primary/5 rounded-[2.5rem] blur-2xl group-hover:bg-primary/10 transition-colors" />
                      <div className="relative rounded-3xl overflow-hidden border-8 border-white shadow-2xl bg-white aspect-[4/5]">
                        <img 
                          src="/images/dashboard.png" 
                          alt="Conversation Maker" 
                          className="w-full h-full object-cover object-top opacity-50"
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            e.currentTarget.src = "https://picsum.photos/seed/convo/800/1000";
                          }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-xl border border-primary/20 text-primary font-bold">
                            Module Preview
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="game" className="mt-0 focus-visible:outline-none">
                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                        <Sparkles className="w-3 h-3" /> Module 05
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold tracking-tight">The Question Game</h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        Get to know someone beyond the surface. Choose your category and stage, and let BehaviorStack™ suggest the perfect questions to deepen your connection.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Deep & Meaningful",
                          "Fun & Lighthearted",
                          "Spicy & Bold",
                          "Dreams & Ambitions"
                        ].map((cat, i) => (
                          <Badge key={i} variant="outline" className="rounded-full px-4 py-1.5 bg-white font-semibold">
                            {cat}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 relative group">
                      <div className="absolute -inset-4 bg-primary/5 rounded-[2.5rem] blur-2xl group-hover:bg-primary/10 transition-colors" />
                      <div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-xl bg-white aspect-[3/4]">
                        <img 
                          src="/images/question_game_1.png" 
                          alt="Question Game Settings" 
                          className="w-full h-full object-cover object-top"
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            e.currentTarget.src = "https://picsum.photos/seed/game1/600/800";
                          }}
                        />
                      </div>
                      <div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-xl bg-white aspect-[3/4]">
                        <img 
                          src="/images/question_game_2.png" 
                          alt="Question Game Results" 
                          className="w-full h-full object-cover object-top"
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            e.currentTarget.src = "https://picsum.photos/seed/game2/600/800";
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </section>

        {/* Features Grid */}
        <section id="features" className="py-24 bg-muted/30 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Core Functional Modules</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Everything you need to navigate the modern dating landscape with confidence and precision.
              </p>
            </div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                {
                  title: "Message Optimizer",
                  description: "Rewrites texts and messages using BehaviorStack™ Smart AI for higher response rates.",
                  icon: MessageSquare,
                  color: "bg-blue-500"
                },
                {
                  title: "Conversation Engine",
                  description: "Suggests real-time replies based on behavioral cues to keep conversations flowing.",
                  icon: Zap,
                  color: "bg-amber-500"
                },
                {
                  title: "Emotional Analyzer",
                  description: "Interprets tone, intent, and sentiment for a deeper understanding of your connections.",
                  icon: Brain,
                  color: "bg-rose-500"
                },
                {
                  title: "Scenario Simulator",
                  description: "Predicts outcomes of different responses to help you make smarter communication decisions.",
                  icon: Target,
                  color: "bg-indigo-500"
                },
                {
                  title: "Profile Enhancer",
                  description: "Improves dating profiles (bios, prompts, images) to significantly increase your matches.",
                  icon: Sparkles,
                  color: "bg-purple-500"
                },
                {
                  title: "Confidence Builder",
                  description: "Guides what to say, when, and how to reduce anxiety in emotional situations.",
                  icon: ShieldCheck,
                  color: "bg-emerald-500"
                }
              ].map((feature, index) => (
                <motion.div key={index} variants={fadeIn}>
                  <Card className="h-full border-none shadow-sm hover:shadow-md transition-shadow group cursor-default">
                    <CardHeader>
                      <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform`}>
                        <feature.icon className="w-6 h-6" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                  Why BehaviorStack™ <br />Smart AI?
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      title: "Reduces Guesswork",
                      description: "Stop overthinking every text. Our AI provides data-backed suggestions based on psychological patterns."
                    },
                    {
                      title: "Behavior-Driven Intelligence",
                      description: "Unlike generic AI, we use decision intelligence optimized for human connection and intent."
                    },
                    {
                      title: "Optimized Communication",
                      description: "Perfect your timing and tone to align with your relationship goals and the other person's behavior."
                    },
                    {
                      title: "Avoid Costly Mistakes",
                      description: "Prevent emotional missteps before they happen by simulating outcomes in advance."
                    }
                  ].map((benefit, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="mt-1">
                        <CheckCircle2 className="text-primary w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">{benefit.title}</h3>
                        <p className="text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="aspect-square rounded-3xl overflow-hidden bg-rose-100 relative">
                  <img 
                    src="https://picsum.photos/seed/connection/800/800" 
                    alt="Human Connection" 
                    className="w-full h-full object-cover mix-blend-multiply opacity-80"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-2xl max-w-xs text-center border border-white/50">
                      <Heart className="w-12 h-12 text-primary mx-auto mb-4 fill-current" />
                      <p className="text-xl font-display font-bold text-primary italic">
                        "The bridge between uncertainty and connection."
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-24 bg-primary text-primary-foreground px-4 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-900/50 rounded-full blur-[100px] -ml-48 -mb-48" />
          
          <div className="max-w-4xl mx-auto relative">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">The HeartSpark Edge</h2>
              <p className="text-primary-foreground/70">How we redefine emotional intelligence.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Smartphone className="w-5 h-5" /> Typical Competitors
                </h3>
                <ul className="space-y-4 opacity-80">
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                    Generic LLM responses
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                    Simple message generation
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                    Static, non-adaptive advice
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                    Limited emotional context
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-white shadow-xl text-foreground">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-primary">
                  <Sparkles className="w-5 h-5" /> HeartSpark
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="text-primary w-5 h-5" />
                    BehaviorStack™ Smart AI
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="text-primary w-5 h-5" />
                    Outcome-driven communication
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="text-primary w-5 h-5" />
                    Behavioral + adaptive learning
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="text-primary w-5 h-5" />
                    High intent + psychology focus
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-24 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground">Everything you need to know about HeartSpark.</p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b border-border/40">
                <AccordionTrigger className="text-left font-bold text-lg hover:text-primary transition-colors">
                  What is BehaviorStack™ Smart AI?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  BehaviorStack™ is our proprietary AI engine that goes beyond simple text generation. It analyzes behavioral patterns, psychological triggers, and communication intent to suggest the most effective way to connect with others.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-b border-border/40">
                <AccordionTrigger className="text-left font-bold text-lg hover:text-primary transition-colors">
                  Is my data private?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  Absolutely. We take privacy seriously. Your conversations and profile data are encrypted and used only to provide you with personalized insights. We never sell your data to third parties.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-b border-border/40">
                <AccordionTrigger className="text-left font-bold text-lg hover:text-primary transition-colors">
                  Can I use it for professional communication?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  While HeartSpark is optimized for dating and personal relationships, the core principles of behavior-driven communication apply to professional settings too. Many users find it helpful for improving interpersonal dynamics at work.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border-b border-border/40">
                <AccordionTrigger className="text-left font-bold text-lg hover:text-primary transition-colors">
                  How does the credit system work?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  HeartSpark uses a credit system for specific AI-powered actions like message rewrites or scenario simulations. You can purchase credits as needed or subscribe for a monthly allowance and premium features.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-rose-50 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden border border-primary/10">
              <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -ml-32 -mt-32 blur-3xl" />
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mb-32 blur-3xl" />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
                  Ready to spark a <br /><span className="text-primary">real connection?</span>
                </h2>
                <p className="text-xl text-muted-foreground mb-12 max-w-xl mx-auto">
                  Join thousands of users who are already using BehaviorStack™ to navigate their relationships with confidence.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button size="lg" className="rounded-full px-10 text-lg h-16 group shadow-xl shadow-primary/20">
                    Get Started Free
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <p className="text-sm text-muted-foreground font-medium">
                    No credit card required to start.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-border/40 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Heart className="text-white w-5 h-5 fill-current" />
                </div>
                <span className="font-display font-bold text-xl tracking-tight text-primary">HeartSpark</span>
              </div>
              <p className="text-muted-foreground max-w-sm leading-relaxed">
                The behavior-driven decision engine for modern relationships. Powered by BehaviorStack™ Smart AI.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6">Product</h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Success Stories</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Company</h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2026 HeartSpark. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-primary transition-colors">Twitter</a>
              <a href="#" className="hover:text-primary transition-colors">Instagram</a>
              <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
