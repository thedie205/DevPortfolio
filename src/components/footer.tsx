import { Button } from '@/components/ui/Button'
import { siteConfig } from '@/lib/site-config'

export default function Footer() {
  return (
    <footer className="text-muted-foreground my-2 text-sm">
      © {new Date().getFullYear()}{' '}
      <Button variant="link" className="text-muted-foreground p-0 font-medium">
      </Button>
      . All rights reserved.
    </footer>
  )
}
