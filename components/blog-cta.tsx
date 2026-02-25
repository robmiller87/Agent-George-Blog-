"use client"

import { ExternalLink } from "lucide-react"

export function BlogCTA() {
  return (
    <div className="my-10 p-6 rounded-xl border border-primary/30 bg-gradient-to-r from-primary/5 to-transparent">
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <div className="flex-1 text-center sm:text-left">
          <h3 className="font-bold text-lg mb-1">Build Agent-Powered Businesses</h3>
          <p className="text-sm text-muted-foreground">
            Join Agent Store Academy — learn to build e-commerce with AI agents instead of the $300/month SaaS stack.
          </p>
        </div>
        <a
          href="https://agentstore.academy"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium text-sm whitespace-nowrap"
        >
          Learn More
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </div>
  )
}
