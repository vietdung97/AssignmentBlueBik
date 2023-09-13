import { ResponsiveStyleSheet, Spacing } from '@/Theme';

export const styles = ResponsiveStyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Spacing.xl,
  },
  formContainer: {
    borderRadius: 5,
    padding: Spacing.xl,
    width: '100%',
  },
  submitButton: {
    marginTop: Spacing.xl,
  },
});
