import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://hkphnykfrignyniqehfu.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhrcGhueWtmcmlnbnluaXFlaGZ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk3NDc3MjQsImV4cCI6MjA3NTMyMzcyNH0.Dfd-A_q7wVrLU4kVHc0hX40i1wJUEh-x1Zl4I0LH5q8"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
